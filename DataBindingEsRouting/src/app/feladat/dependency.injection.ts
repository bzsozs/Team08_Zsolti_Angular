namespace dependencyInjectionNelkul {
    class SzemelyesAdat {
        constructor(/*teljes_nev:string*/) { }
    }

    class JarmuAdat {
        constructor() { }
    }

    class JarmuVezeto {
        vezeto: SzemelyesAdat;
        jarmu: JarmuAdat;
        constructor() {
            this.vezeto = new SzemelyesAdat();
            this.jarmu = new JarmuAdat();
        }
    }

    let ujSofor = new JarmuVezeto();

}

namespace dependencyInjectionHasznalataval {
    class SzemelyesAdat {
        teljesNev: string;
        constructor(vezNev: string, kerNev: string) {
            this.teljesNev = vezNev + "" + kerNev;
        }
    }

    class JarmuAdat {
        constructor(marka: string) { }
    }

    class JarmuVezeto {
        vezeto: SzemelyesAdat;
        jarmu: JarmuAdat;
        constructor(vezeto: SzemelyesAdat, jarmu: JarmuAdat) {
            this.vezeto = vezeto;
            this.jarmu = jarmu;
        }
    }
    let soforNeve = new SzemelyesAdat("Békés", "Csaba");
    let soforAuto = new JarmuAdat("BMW");
    let ujSzallito = new JarmuVezeto(soforNeve, soforAuto);

}