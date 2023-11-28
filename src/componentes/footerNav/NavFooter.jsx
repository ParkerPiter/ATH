import style from "./NavFooter.module.css";

const Nav = () => {
  // Obtener la hora actual
  const time = new Date();

  // Obtener la hora, los minutos y los segundos
  let hours = time.getHours();
  const min = time.getMinutes();

  let pmAm = hours >= 12 ? "PM" : "AM";

  // Convertir a formato de 12 horas
  hours = hours % 12 || 12;
  return (
    <div className={style.footer}>
      <div>
        <img
          className="win"
          width="30"
          height="30"
          src="https://img.icons8.com/color/48/windows-95.png"
          alt="windows-95"
        />
        <p className="btn btn-primary" >Start</p>
      </div>
      <p className={style.clock}>
        {hours}:{min} {pmAm}
      </p>
    </div>
  );
};

export default Nav;
