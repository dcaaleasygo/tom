import { useEffect, useState } from "react"
import Tendencias from './Tendencias';
import type { PayloadPages, TendenciasBlock } from './Tendencias';



interface BloqueGrupo{

}
type LayoutBlock =  BloqueGrupo

interface Tendencia {
  title: string
  slug: string
  layout: LayoutBlock[]
}
  const slug = 'home'
export function Pages() {
      const [tendencias, setTendencias] = useState<Tendencia | null>(null)
    
useEffect(() => {
    fetch(`http://localhost:3000/api/pages?where[slug][equals]=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.docs && data.docs.length > 0) {
          setTendencias(data.docs[0])
        }
      })
      .catch(err => console.error(err))
  }, [slug])


  if (!tendencias) return null

  const tendenciasBlocks = tendencias.layout.filter(
    b => b.blockType === 'Tendencias'
  ) as TendenciasBlock[];

  const payloadPages: PayloadPages = {
    layout: tendenciasBlocks.map((block, index) => {
      const bloques: BloqueGrupo[] = [];

      const cards = block.bloques ?? [];

      for (let i = 0; i < cards.length; i += 4) {
        bloques.push({ cards: cards.slice(i, i + 4) });
      }


      return {
        blockType: block.blockType,
        titulo: block.titulo,
        botones: block.botones,
        bloques
      } as TendenciasBlock;
    })
  }


  return (
  )
  }