export interface CardProps {
  title: string;
  subtitle: string;
  icon: string;
}

export const Card = ({ title, subtitle, icon }: CardProps) => {

  return (
    <div className="card">
      <img src={icon} height={64} width={64} />
      <h2 >
        {title}
      </h2>
      <p>
        {subtitle}
      </p>
    </div>
  )
}