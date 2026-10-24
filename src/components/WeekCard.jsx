import { useEffect, useState } from 'react'

// Checks whether the PDF file really exists in public/pdfs before showing the button.
function usePdfAvailable(path) {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    if (!path) return
    let cancelled = false
    fetch(path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (!cancelled) setAvailable(res.ok && type.includes('pdf'))
      })
      .catch(() => { if (!cancelled) setAvailable(false) })
    return () => { cancelled = true }
  }, [path])

  return available
}

export default function WeekCard({ lab }) {
  const noTasks = lab.pdf === null
  const pdfReady = usePdfAvailable(lab.pdf)
  const status = lab.autoStatus && pdfReady ? 'Completed' : lab.status
  const done = status === 'Completed'

  return (
    <article className={`card ${noTasks ? 'card--muted' : ''}`}>
      <div className="card__top">
        <span className="card__week">Week {lab.week}</span>
        <span className={`badge ${done ? 'badge--done' : 'badge--none'}`}>{status}</span>
      </div>
      <h3>{lab.title}</h3>
      {noTasks ? (
        <p className="card__notice">{lab.description}</p>
      ) : (
        <p>{lab.description}</p>
      )}
      {lab.pdf && pdfReady && (
        <div className="card__actions">
          <a className="btn btn--primary btn--sm" href={lab.pdf} target="_blank" rel="noopener noreferrer">
            View PDF
          </a>
        </div>
      )}
      {lab.pdf && !pdfReady && (
        <p className="card__note">The PDF has not been added yet.</p>
      )}
    </article>
  )
}
