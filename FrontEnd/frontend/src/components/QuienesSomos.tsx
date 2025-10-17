import { useEffect, useState } from 'react'
import '../Styles/QuienesSomos.css'

interface Media {
  id: string
  url: string
  alt: string
  filename: string
}

interface BloqueContenido {
  titulo: string
  content: string
  file?: Media
  boton: string
  backgroud?: Media
}

interface ButtonBlock {
  id: string
  blockType: 'buttonText'
  buttonText: string
  url: string
}


interface LayoutBlock {
  ["Quienes somos"]?: BloqueContenido
  ["Mision"]?: BloqueContenido
  ["Vision"]?: BloqueContenido
}

interface Quien {
  title: string
  slug: string
  layout: LayoutBlock[]
}

export function Quienes() {
  const [quienes, setQuienes] = useState<Quien | null>(null)
  const slug = 'quienes-somos'

  useEffect(() => {
    fetch(`http://localhost:3000/api/pages?where[slug][equals]=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.docs && data.docs.length > 0) {
          console.log('DATA:', data.docs[0])
          setQuienes(data.docs[0])
        }
      })
      .catch(err => console.error(err))
  }, [slug])

  if (!quienes) return null

  const layout = quienes.layout[0]

  const quienesSomos = layout["Quienes somos"]
  const mision = layout["Mision"]
  const vision = layout["Vision"]

  return (
    <div className="quienes-somos">


      {quienesSomos && (
        <section
          className="section-quienes"
          style={{
            backgroundImage: quienesSomos.file?.url
              ? `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${quienesSomos.file.url})`
              : undefined,

            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',

            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <h2 className="titulo">{quienesSomos.titulo}</h2>
          <p>{quienesSomos.content}</p>

          <button type="button" className="boton">
            <a href={quienesSomos.boton} className="boton">{quienesSomos.boton}</a>
            {quienesSomos.boton}
          </button>
        </section>
      )}



      {mision && (
        <section className="section-mision">
          
          {mision.file && (
            <img src={mision.file.url} alt={mision.file.alt || ''} />
          )}
          <p>{mision.content}</p>
        </section>
      )}


      {vision && (
        <section className="section-vision">
          <h2 className="titulo">{vision.titulo}</h2>
          {vision.file && (
            <img src={vision.file.url} alt={vision.file.alt || ''} />
          )}
          <p>{vision.content}</p>
        </section>
      )}
    </div>
  )
}

export default Quienes
