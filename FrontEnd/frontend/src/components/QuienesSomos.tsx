import { useEffect, useState } from 'react'
import '../Styles/PoliticasDePrivacidad.css'

interface Media {
  id: string
  url: string
  alt: string
  filename: string
}

interface Grupo {
  title: string
  content: string
  file?: Media
}

interface Quienes {
  title: string
  slug: string
  QuienesSomos: Grupo
  Mision: Grupo
  Vision: Grupo
}

export function Quienes() {
  const [quienes, setQuienes] = useState<Quienes | null>(null)
  const slug = 'quienes-somos'

  useEffect(() => {
    fetch(`http://localhost:3000/api/pages?where[slug][equals]=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.docs && data.docs.length > 0) {
          setQuienes(data.docs[0])
        }
      })
      .catch(err => console.error(err))
  }, [slug])

  if (!quienes) return null

  return (
    <div className="Politica">
      {/* Sección: Quienes Somos */}
      <section className="content">
        <h2 className="titulo">{quienes.QuienesSomos.title}</h2>
        <p className="texto">{quienes.QuienesSomos.content}</p>
        {quienes.QuienesSomos.file && (
          <img
            src={quienes.QuienesSomos.file.url}
            alt={quienes.QuienesSomos.file.alt}
            className="imagen"
          />
        )}
      </section>

      {/* Sección: Misión */}
      <section className="content">
        <h2 className="titulo">{quienes.Mision.title}</h2>
        <p className="texto">{quienes.Mision.content}</p>
        {quienes.Mision.file && (
          <img
            src={quienes.Mision.file.url}
            alt={quienes.Mision.file.alt}
            className="imagen"
          />
        )}
      </section>

      {/* Sección: Visión */}
      <section className="content">
        <h2 className="titulo">{quienes.Vision.title}</h2>
        <p className="texto">{quienes.Vision.content}</p>
        {quienes.Vision.file && (
          <img
            src={quienes.Vision.file.url}
            alt={quienes.Vision.file.alt}
            className="imagen"
          />
        )}
      </section>
    </div>
  )
}

export default Quienes
