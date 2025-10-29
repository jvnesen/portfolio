import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed left-8 top-8 flex flex-col gap-4">
      <div className="text-primary font-normal text-base mb-2">
        jonathan liu
      </div>
      
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `text-foreground text-base transition-all hover:font-semibold ${
            isActive ? "font-semibold" : "font-normal"
          }`
        }
      >
        overview
      </NavLink>
      
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-foreground text-base transition-all hover:font-semibold ${
            isActive ? "font-semibold" : "font-normal"
          }`
        }
      >
        contact // about
      </NavLink>
    </nav>
  );
};

export default Navigation;
