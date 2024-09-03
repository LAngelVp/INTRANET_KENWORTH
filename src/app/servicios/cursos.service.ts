import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  lista_cursos: Cursos[] = [
    {
        id: "1",
        nombre: "Introducción a JavaScript",
        departamento_instructor: "Desarrollo Web",
        departamento_aprendiz: "Front-end",
        fecha: "2024-10-01",
        link_video: "https://videos.pexels.com/video-files/7963140/7963140-uhd_2560_1440_30fps.mp4",
        descripcion: "Un curso básico para aprender los fundamentos de JavaScript, el lenguaje de programación esencial para el desarrollo web."
    },
    {
        id: "2",
        nombre: "Fundamentos de SQL",
        departamento_instructor: "Base de Datos",
        departamento_aprendiz: "Back-end",
        fecha: "2024-11-15",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Aprende las bases del lenguaje SQL para gestionar y consultar bases de datos relacionales."
    },
    {
        id: "3",
        nombre: "Diseño de Interfaces con Figma",
        departamento_instructor: "Diseño",
        departamento_aprendiz: "UI/UX",
        fecha: "2024-12-01",
        link_video: "https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso sobre cómo usar Figma para diseñar interfaces de usuario atractivas y funcionales."
    },
    {
        id: "4",
        nombre: "Desarrollo de Aplicaciones Móviles",
        departamento_instructor: "Desarrollo Móvil",
        departamento_aprendiz: "Desarrolladores",
        fecha: "2025-01-15",
        link_video: "https://videos.pexels.com/video-files/7963140/7963140-uhd_2560_1440_30fps.mp4",
        descripcion: "Curso completo sobre el desarrollo de aplicaciones móviles para Android e iOS."
    },
    {
        id: "5",
        nombre: "Principios de Machine Learning",
        departamento_instructor: "Data Science",
        departamento_aprendiz: "Ciencia de Datos",
        fecha: "2025-02-01",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Introducción a los conceptos básicos y técnicas de Machine Learning para la ciencia de datos."
    },
    {
        id: "6",
        nombre: "Introducción a Docker",
        departamento_instructor: "Infraestructura",
        departamento_aprendiz: "DevOps",
        fecha: "2025-03-10",
        link_video: "https://videos.pexels.com/video-files/3201691/3201691-hd_1920_1080_25fps.mp4",
        descripcion: "Aprende a usar Docker para la creación y gestión de contenedores en entornos de desarrollo y producción."
    },
    {
        id: "7",
        nombre: "Desarrollo Web con React",
        departamento_instructor: "Desarrollo Front-end",
        departamento_aprendiz: "React Developers",
        fecha: "2025-04-20",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso sobre cómo desarrollar aplicaciones web utilizando React, una popular biblioteca de JavaScript."
    },
    {
        id: "8",
        nombre: "Seguridad en Aplicaciones Web",
        departamento_instructor: "Seguridad",
        departamento_aprendiz: "Desarrolladores",
        fecha: "2025-05-25",
        link_video: "https://videos.pexels.com/video-files/7668948/7668948-uhd_2560_1440_25fps.mp4",
        descripcion: "Conceptos clave y mejores prácticas para asegurar aplicaciones web contra vulnerabilidades comunes."
    },
    {
        id: "9",
        nombre: "Analítica de Datos con Python",
        departamento_instructor: "Data Science",
        departamento_aprendiz: "Analistas de Datos",
        fecha: "2025-06-15",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso para aprender a usar Python en la analítica de datos, incluyendo librerías y técnicas para el análisis de datos."
    },
    {
        id: "10",
        nombre: "Fundamentos de UX",
        departamento_instructor: "Diseño",
        departamento_aprendiz: "Diseñadores UX",
        fecha: "2025-07-01",
        link_video: "https://videos.pexels.com/video-files/7668948/7668948-uhd_2560_1440_25fps.mp4",
        descripcion: "Explora los principios fundamentales de la experiencia del usuario (UX) para crear productos más efectivos y atractivos."
    },
    {
        id: "11",
        nombre: "Programación en C#",
        departamento_instructor: "Desarrollo",
        departamento_aprendiz: "Desarrolladores",
        fecha: "2025-08-10",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso para aprender la programación en C#, un lenguaje versátil utilizado en el desarrollo de aplicaciones de Windows."
    },
    {
        id: "12",
        nombre: "Automatización con Selenium",
        departamento_instructor: "Testing",
        departamento_aprendiz: "QA Engineers",
        fecha: "2025-09-20",
        link_video: "https://videos.pexels.com/video-files/7661274/7661274-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso sobre cómo usar Selenium para la automatización de pruebas en aplicaciones web."
    },
    {
        id: "13",
        nombre: "Introducción a Kubernetes",
        departamento_instructor: "Infraestructura",
        departamento_aprendiz: "DevOps",
        fecha: "2025-10-15",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Aprende los conceptos básicos de Kubernetes para la gestión y orquestación de contenedores."
    },
    {
        id: "14",
        nombre: "Desarrollo de APIs con Node.js",
        departamento_instructor: "Desarrollo Backend",
        departamento_aprendiz: "Desarrolladores Backend",
        fecha: "2025-11-01",
        link_video: "https://videos.pexels.com/video-files/7661274/7661274-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso para desarrollar APIs utilizando Node.js, un entorno de ejecución de JavaScript en el lado del servidor."
    },
    {
        id: "15",
        nombre: "Análisis de Datos con R",
        departamento_instructor: "Data Science",
        departamento_aprendiz: "Analistas de Datos",
        fecha: "2025-12-05",
        link_video: "https://videos.pexels.com/video-files/7668489/7668489-uhd_2560_1440_25fps.mp4",
        descripcion: "Aprende a utilizar el lenguaje R para realizar análisis de datos avanzados y visualizaciones."
    },
    {
        id: "16",
        nombre: "Principios de Agile",
        departamento_instructor: "Gestión de Proyectos",
        departamento_aprendiz: "Project Managers",
        fecha: "2026-01-10",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso sobre los principios y prácticas de la metodología Agile para la gestión eficiente de proyectos."
    },
    {
        id: "17",
        nombre: "Programación en Java",
        departamento_instructor: "Desarrollo",
        departamento_aprendiz: "Desarrolladores",
        fecha: "2026-02-20",
        link_video: "https://videos.pexels.com/video-files/7668489/7668489-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso sobre programación en Java, un lenguaje ampliamente utilizado en aplicaciones empresariales y móviles."
    },
    {
        id: "18",
        nombre: "Machine Learning Avanzado",
        departamento_instructor: "Data Science",
        departamento_aprendiz: "Ciencia de Datos",
        fecha: "2026-03-15",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso avanzado en técnicas y algoritmos de Machine Learning para aplicaciones más complejas."
    },
    {
        id: "19",
        nombre: "Desarrollo de Aplicaciones con Flutter",
        departamento_instructor: "Desarrollo Móvil",
        departamento_aprendiz: "Desarrolladores Móviles",
        fecha: "2026-04-25",
        link_video: "https://videos.pexels.com/video-files/7668943/7668943-uhd_2560_1440_25fps.mp4",
        descripcion: "Aprende a desarrollar aplicaciones móviles multiplataforma utilizando el framework Flutter."
    },
    {
        id: "20",
        nombre: "Introducción a la Blockchain",
        departamento_instructor: "Tecnologías Emergentes",
        departamento_aprendiz: "Blockchain Developers",
        fecha: "2026-05-10",
        link_video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
        descripcion: "Curso para entender los fundamentos de la tecnología blockchain y su aplicación en el desarrollo de criptomonedas y contratos inteligentes."
    }
  ]

  mostrar_videos():Observable<Cursos[]>{
    return of(this.lista_cursos);
  }
}
