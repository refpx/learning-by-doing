const HOLIDAYS = [
  {
    date: new Date("2023-01-01 GMT-05:00"),
    name: "Año Nuevo",
  },
  {
    date: new Date("2023-01-27 GMT-05:00"),
    name: "Día de la Educación",
  },
  {
    date: new Date("2023-04-02 GMT-05:00"),
    name: "Viernes Santo",
  },
  {
    date: new Date("2023-05-01 GMT-05:00"),
    name: "Día del Trabajo",
  },
  {
    date: new Date("2023-06-29 GMT-05:00"),
    name: "San Pedro y San Pablo",
  },
  {
    date: new Date("2023-07-28 GMT-05:00"),
    name: "Fiestas Patrias",
  },
  {
    date: new Date("2023-07-29 GMT-05:00"),
    name: "Fiestas Patrias",
  },
  {
    date: new Date("2023-08-30 GMT-05:00"),
    name: "Santa Rosa de Lima",
  },
  {
    date: new Date("2023-10-08 GMT-05:00"),
    name: "Combate de Angamos",
  },
  {
    date: new Date("2023-11-01 GMT-05:00"),
    name: "Día de Todos los Santos",
  },
  {
    date: new Date("2023-12-08 GMT-05:00"),
    name: "Inmaculada Concepción",
  },
  {
    date: new Date("2023-12-25 GMT-05:00"),
    name: "Navidad",
  },
];

const today = new Date(new Date().setHours(0, 0, 0, 0));

const nextHoliday = HOLIDAYS.find((holiday) => holiday.date >= today) || {
  ...HOLIDAYS[0],
  date: new Date(
    HOLIDAYS[0].date.getFullYear() + 1,
    HOLIDAYS[0].date.getMonth(),
    HOLIDAYS[0].date.getDate(),
  ),
};

const msDiff = nextHoliday.date.getTime() - today.getTime();
const daysDiff = Math.ceil(msDiff / (1000 * 60 * 60 * 24));

const rtf = new Intl.RelativeTimeFormat("es-PE", {numeric: "auto"});

function App() {
  return (
    <main>
      <h1>
        El próximo feriado ({nextHoliday.name}) es {rtf.format(daysDiff, "day")}.
      </h1>
    </main>
  );
}

export default App;
