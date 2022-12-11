import defaultImage from '../../public/vercel.svg'
import Image from 'next/image'

export interface CardProps {
  title: string;
  subtitle: string;
  icon?: string;
}

export const Card = ({ title, subtitle, icon = defaultImage }: CardProps) => {
  const imageSrc = icon.startsWith('//') ? `https:${icon}` : icon

  return (
    <div className="card">
      <Image src={imageSrc} height={64} width={64} alt={title} />
      <h2 >
        {title}
      </h2>
      <p>
        {subtitle}
      </p>
    </div>
  )
}