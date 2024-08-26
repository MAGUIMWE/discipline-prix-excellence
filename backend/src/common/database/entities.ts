import { Activite } from "./entities/activite.entity";
import { Discipline } from "./entities/conseil-discipline.entity";
import { Departement } from "./entities/departement.entity";
import { Infraction } from "./entities/infraction.entity";

import { PrixExcellence } from "./entities/prix_excellence.entity";
import { Sanction } from "./entities/sanction.entity";
import { Specialite } from "./entities/specialite.entity";
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";
import { Tuteur } from "./entities/tuteur.entity";
import { User } from "./entities/user.entity";

export const entities = [
    Teacher,
    User,
    Discipline,
    PrixExcellence,
    Student,
    Infraction,
    Departement,
    Sanction,
    Specialite,
    Tuteur,
    Activite
]