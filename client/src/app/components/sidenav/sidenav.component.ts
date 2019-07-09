import { Component , ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

    constructor(private router: Router) {}

    @ViewChild('sidenav') sidenav ;


    modulos: any[] = [{
        module: 'Administración',
        expanded: false,
        options: [{
            option: 'Configuración',
            route: 'administracion/configuracion'
        }, {
            option: 'Seguridad',
            route: 'administracion/seguridad'
        }]
    },
    {
        module: 'Maestros',
        expanded: false,
        options: [{
            option: 'Modelos de distribución',
            route: 'maestros/modelos-de-distribucion'
        }, {
            option: 'Operaciones',
            route: 'maestros/operaciones'
        }, {
            option: 'Contenedores',
            route: 'maestros/contenedores'
        }, {
            option: 'Insumos',
            route: 'maestros/insumos'
        }, {
            option: 'Kits',
            route: 'maestros/kits'
        }]
    },
    {
        module: 'Configuración',
        expanded: false,
        options: [{
            option: 'Capacidad de contenedor',
            route: 'configuracion/capacidad-de-contenedor'
        }, {
            option: 'Asignar secuencia',
            route: 'configuracion/asignar-secuencia'
        },
        {
            module: 'Estructura de datos',
            expanded: false,
            options: [{
                option: 'Estructura archivos cliente',
                route: 'configuracion-estructura-datos/estructura-archivos-cliente'
            }, {
                option: 'Estructura archivos propios',
                route: 'configuracion-estructura-datos/estructura-archivos-propios'
            }, {
                option: 'Estructura archivos propios',
                route: 'configuracion-estructura-datos/estructura-archivos-propios'
            }, {
                option: 'Log de errores',
                route: 'configuracion-estructura-datos/log-de-errores'
            }]
        },
        {
            module: 'Datos operación',
            expanded: false,
            options: [{
                option: 'Mezcla de archivos',
                route: 'configuracion-datos-operacion/mezcla-de-archivos'
            }, {
                option: 'Modelo TCC',
                route: 'configuracion-datos-operacion/modelo-TCC'
            }, {
                option: 'Priorización',
                route: 'configuracion-datos-operacion/priorizacion'
            }, {
                option: 'Jerarquia',
                route: 'configuracion-datos-operacion/jerarquia'
            }]
        }, {
            option: 'Reglas empaque',
            route: 'configuracion/reglas-empaque'
        }, {
            option: 'Calculo de materiales',
            route: 'configuracion/calculo-de-materiales'
        },
        {
            module: 'Datos rotulación',
            expanded: false,
            options: [{
                option: 'Configuración rangos seriales y remesas',
                route: 'configuracion-datos-rotulacion/configuracion-rangos-seriales-y-remesas'
            }, {
                option: 'Preparación rotulos y etiquetas',
                route: 'configuracion-datos-rotulacion/preparacion-rotulos-y-etiquetas'
            }]
        },

        {
            module: 'Reportes',
            expanded: false,
            options: [{
                option: 'Priorización datos',
                route: 'configuracion-reportes/priorizacion-datos'
            }, {
                option: 'Calculo materiales',
                route: 'configuracion-reportes/calculo-materiales'
            }, {
                option: 'Sedes por establecimiento',
                route: 'configuracion-reportes/sedes-por-establecimiento'
            }, {
                option: 'Establecimiento por punto entrega',
                route: 'configuracion-reportes/establecimiento-por-punto-entrega'
            }]
        }]
    },
    {
        module: 'Asignación',
        expanded: false,
        options: [{
            option: 'Asignacion sitio operario',
            route: 'asignacion/asignacion-sitio-operario'
        }]
    },
    {
        module: 'Empaque',
        expanded: false,
        options: [{
            option: 'Recepción materiales',
            route: 'empaque/recepcion-materiales'
        }, {
            option: 'Empaque secundario',
            route: 'empaque/empaque-secundario'
        }, {
            option: 'Empaque terciario',
            route: 'empaque/empaque-terciario'
        }, {
            option: 'Entrega a distribución',
                route: 'empaque/entrega-a-distribucion'
        }, {
            module: 'Reportes',
            expanded: false,
            options: [{
                option: 'Reporte avance empaque secundario',
                route: 'empaque-reportes/reporte-avance-empaque-secundario'
            }, {
                option: 'Generación acta entrega impresor',
                route: 'empaque-reportes/generacion-acta-entrega-impresor'
            }, {
                option: 'Reporte novedades empaque secundario',
                route: 'empaque-reportes/reporte-novedades-empaque-secundario'
            }, {
                option: 'Reporte avance empaque terciario',
                route: 'empaque-reportes/reporte-avance-empaque-terciario'
            }, {
                option: 'Consulta rastreo material empacado',
                route: 'empaque-reportes/consulta-rastreo-material-empacado'
            }]
        }]
    },
    {
        module: 'Desempaque',
        expanded: false,
        options: [{
            option: 'Recepción material aplicado',
                route: 'desempaque/recepcion-material-aplicado'
        }, {
            option: 'Desempaque terciario',
                route: 'desempaque/desempaque-terciario'
        }, {
            option: 'Desempaque secundario',
                route: 'desempaque/desempaque-secundario'
        }, {
            option: 'Reempaque',
                route: 'desempaque/reempaque'
        }, {
            option: 'Desempaque terciario',
                route: 'desempaque/desempaque-terciario'
        }, {
            option: 'Generación acta destrucción',
                route: 'desempaque/generacion-acta-destruccion'
        }, {
            option: 'Cierre operación',
                route: 'desempaque/cierre-operacion'
        }, {
            module: 'Reportes desempaque',
            expanded: false,
            options: [{
                option: 'Consolidación material aplicado',
                route: 'desempaque-reportes-desempaque/consolidacion-material-aplicado'
            }, {
                option: 'Lectura retorno material sitio completo',
                route: 'desempaque-reportes-desempaque/lectura-retorno-material-sitio-completo'
            }, {
                option: 'Avance desempaque',
                route: 'desempaque-reportes-desempaque/avance-desempaque'
            }, {
                option: 'Novedades desempaque',
                route: 'desempaque-reportes-desempaque/novedades-desempaque'
            }, {
                option: 'Retorno material centros de operación',
                route: 'desempaque-reportes-desempaque/retorno-material-centros-de-operacion'
            }, {
                option: 'Faltantes material a devolver',
                route: 'desempaque-reportes-desempaque/faltantes-material-a-devolver'
            }, {
                option: 'Rastreo material desempaque',
                route: 'desempaque-reportes-desempaque/rastreo-material-desempaque'
            }]
        },
        {
            module: 'Reportes re empaque',
            expanded: false,
            options: [{
                option: 'Generación acta entrega lector',
                route: 'desempaque-reportes-reempaque/generacion-acta-entrega-lector'
            }, {
                option: 'Avance re empaque',
                route: 'desempaque-reportes-reempaque/avance-reempaque'
            }, {
                option: 'Rastreo material re empaque',
                route: 'desempaque-reportes-reempaque/rastreo-material-reempaque'
            }]
        },
        {
            module: 'Reportes destrucción',
            expanded: false,
            options: [{
                option: 'Generación acta aprobación destrucción',
                route: 'desempaque-reportes-destruccion/reporte-generacion-acta-destruccion'
            }]
        }]
    },
    {
        module: 'Demográficos',
        expanded: false,
        options: [{
            option: 'Establecimiento',
                route: 'demograficos/establecimiento'
        }, {
            option: 'Sede',
                route: 'demograficos/sede'
        }, {
            option: 'Punto entrega',
                route: 'demograficos/punto-entrega'
        }, {
            option: 'Departamento',
                route: 'demograficos/departamento'
        }, {
            option: 'Municipio',
                route: 'demograficos/municipio'
        }]
    }

    ];

    cerrarItems(modulo) {
        for (const moduls of this.modulos) {
            if (moduls !== modulo) {
                moduls.expanded = false;
            }
        }
    }

    cerrarSubItems(modulo, submodulo ) {
        for (const moduls of this.modulos) {
            if (moduls === modulo) {
                for (const submoduls of moduls.options) {
                    if (submoduls !== submodulo) {
                        submoduls.expanded = false;
                    }
                }
            }
        }
    }

    route(route) {
        this.router.navigate(['/' + route + '']);
    }
}


