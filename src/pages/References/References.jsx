import React from 'react'
import './references.css'
import ProjectCard from './components/ProjectCard'
import Header from './components/Header'
import FAQ from '../../components/FAQ'

export default function References() {
    const projects = [
      { title: "Proje 1", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
      { title: "Proje 2", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
      { title: "Proje 3", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
      { title: "Proje 4", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
      { title: "Proje 5", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
      { title: "Proje 6", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
      { title: "Proje 7", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
      { title: "Proje 8", desc: "Lorem Ipsum Dolor.", link: "https://google.com/" },
    ];
  return (
    <>
      <Header />
      <div className="container" id='projects'>
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
          <ProjectCard projects={projects} />
        </div>
      </div>
      <FAQ />
    </>
  )
}
