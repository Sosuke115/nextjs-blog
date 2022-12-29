import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    // console.log(fileNames);

    let allPostsData = [];
    console.log(fileNames);
    for (const fileName of fileNames) {
        console.log(fileName);
        const id = fileName.replace(/\.md$/, '')
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content)
        
        const contentHtml = processedContent.toString()

        allPostsData.push({
            id,
            contentHtml,
            ...matterResult.data
        })
    }
    // const allPostsData = fileNames.map(fileName => {

    //     // Remove ".md" from file name to get id
    //     const id = fileName.replace(/\.md$/, '')

    //     // Read markdown file as string
    //     const fullPath = path.join(postsDirectory, fileName)
    //     const fileContents = fs.readFileSync(fullPath, 'utf8')

    //     // // Use gray-matter to parse the post metadata section
    //     const matterResult = matter(fileContents)

    //     // // Use remark to convert markdown into HTML string
    //     // const processedContent = await remark()
    //     //     .use(html)
    //     //     .process(matterResult.content)
        
    //     // const contentHtml = processedContent.toString()

    //     // Combine the data with the id
    //     // console.log(id);
    //     // // console.log(...matterResult.data);
    //     return {
    //         // contentHtml,
    //         id,
    //         ...matterResult.data
    //     }
    // })
    // Sort posts by data
    return allPostsData

    // return allPostsData.sort(({data: a}, {data: b}) => {
    //     if (a < b) {
    //         return 1
    //     } else if (a > b){
    //         return -1
    //     } else{
    //         return 0
    //     }
    // })
}

export async function getStaticPropsLib() {
    const allPostsData = await getSortedPostsData();
    const idToData = { contentHtml: {}, title: {} };
    allPostsData.forEach((data) => {
      idToData["contentHtml"][data["id"]] = data["contentHtml"];
      idToData["title"][data["id"]] = data["title"];
    });
    return {
      props: {
        idToData,
      },
    };
  }


export function test() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {

        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    
    return allPostsData
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }

}
