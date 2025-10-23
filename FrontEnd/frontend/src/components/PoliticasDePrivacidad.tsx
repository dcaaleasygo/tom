import { useEffect, useState } from 'react'
import '../Styles/PoliticasDePrivacidad.css'


interface ContentBodyBlock {
    blockType: 'content_Body'
    body: BodyBlock[]
    images?: Media
    Text: string
    Title: string
}

interface Media {
    id: string
    url: string
    filename: string
    alt: string
    mimeType: string
    size?: 'small' | 'medium' | 'large' | 'custom250'
    sizes?: {
        small?: MediaSize
        medium?: MediaSize
        large?: MediaSize
        custom250?: MediaSize
    }
}
interface TextBlock {
    id: string
    blockType: 'text'
    value: string
}

interface MediaSize {
    url: string
    width: number
    height: number
}
type LayoutBlock = ContentBodyBlock

interface Politicas {
    title: string
    slug: string
    layout: LayoutBlock[]
}

interface TitleBlock {
    id: string
    blockType: 'title'
    value: string
}

type BodyBlock = TextBlock | TitleBlock

export function Politicas() {
    const [politicas, setPages] = useState<Politicas | null>(null)

    const slug = 'privacidad'
    useEffect(() => {
        fetch(`http://localhost:3000/api/pages?where[slug][equals]=${slug}`)
            .then(res => res.json())
            .then(data => {
                if (data.docs && data.docs.length > 0) {
                    setPages(data.docs[0])
                }
            })
            .catch(err => console.error(err))
    }, [slug])


    if (!politicas) return null



    return (
  <div className="Politica">
    {politicas.layout
      .filter(block => block.blockType === 'content_Body')
      .map((block, idx) => (
        <section key={idx} className="content">
          {block.body?.map(item => {
            if (item.blockType === 'title') {
              return (
                <div key={item.id} className="titulo">
                  <p>{item.value}</p>
                </div>
              )
            }

            if (item.blockType === 'text') {
              return (
                <div key={item.id} className="contenido">
                  <p>{item.value}</p>
                </div>
              )
            }

            return null
          })}
        </section>
      ))}
  </div>
)}

export default Politicas