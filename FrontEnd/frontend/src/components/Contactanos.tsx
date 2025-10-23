import { useEffect, useState } from 'react'
import '../Styles/Contactanos.css'


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
type LayoutBlock = ContentBodyBlock | FormularioBlock

interface Contacto {
  title: string
  slug: string
  layout: LayoutBlock[]
}

interface TitleBlock {
  id: string
  blockType: 'title'
  value: string
}


interface FormularioBlock {
  id: string
  blockType: 'form'
  titulo: string
  inputs: { 'place holder': string }[]
  boton: string
}


type BodyBlock = TextBlock | TitleBlock | FormularioBlock

export function Contacto() {
  const [contactanos, setContacto] = useState<Contacto | null>(null)

  const slug = 'contactanos'
  useEffect(() => {
    fetch(`http://localhost:3000/api/pages?where[slug][equals]=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.docs && data.docs.length > 0) {
          setContacto(data.docs[0])
        }
      })
      .catch(err => console.error(err))
  }, [slug])


  if (!contactanos) return null



  return (
    <div className='fof'>

      <div className="form">
        {contactanos.layout
          .filter((b): b is FormularioBlock => b.blockType === 'form')
          .map((block, idx) => (
            <div className="datos" key={block.id || idx}>
              <p className='titulo'>{block.titulo}</p>
              {block.inputs?.map((input, i) => (
                <input key={i} placeholder={input['place holder']} />
              ))}
              <button type="button" className="boton">
                {block.boton}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Contacto