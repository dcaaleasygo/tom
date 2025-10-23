import { useEffect, useState } from "react"
import Tendencias from './Tendencias';
import type { PayloadPages, TendenciasBlock } from './Tendencias';
import '../Styles/Tendencia.css'

interface BloqueGrupo {
  cards: any[]
}


interface TendenciasPayloadBlock {
  blockType: 'Tendencias';
  titulo: string;
  botones?: { texto: string; url: string }[];
  bloques?: BloqueGrupo[]
}

type LayoutBlock = TendenciasPayloadBlock

interface Trend {
  title: string
  slug: string
  layout: LayoutBlock[]
}

const slug = 'tendencia'

export function Tendencia() {
  const [tendencias, setTendencias] = useState<Trend | null>(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/pages?where[slug][equals]=${slug}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
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
    layout: tendenciasBlocks.map((block) => {
      const bloques: BloqueGrupo[] = [];
      const cards = block.bloques ?? [];

      const tamaños = [10, 1, 4,5];
      let start = 0;

      for (let size of tamaños) {
        bloques.push({ cards: cards.slice(start, start + size) });
        start += size;
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
    <div className="Trends">
      <div>
        <Tendencias pages={payloadPages} />
      </div>
    </div>
  )
}

export default Tendencia