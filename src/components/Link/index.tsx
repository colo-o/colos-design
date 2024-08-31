import { NavLink } from 'react-router-dom';

type ColoLinkProps = {
  name: string;
  to: string;
  className?: string;
}

const ColoLink = ({ name, to, className }: ColoLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        [
          isActive ? "active" : "inactive",
        ].join(" ")
      }
      to={to}
    >{name}</NavLink>
  )
}

export default ColoLink;
