import React from "react";
import invc from "../assets/inv.png";
import todo from "../assets/todo.png";
import vch from "../assets/vch.png";
import shop from "../assets/shop.png";
import vam from "../assets/vam.png";
const projects = [
  {
    id: 1,
    name: "Invoice Maker App",
    status: "Finished",
    image: invc,
    project: "https://invoicemakerbyjoyy.netlify.app/",
  },
  {
    id: 2,
    name: "Task Manager App",
    status: "Finished",
    image: todo,
    project: "https://todobyjoyy.netlify.app (https://todobyjoyy.netlify.app/)",
  },
  {
    id: 3,
    name: "Ecommerce App",
    status: "Progressing",
    image: shop,
    project: "https://shoppingappbyjoyy.netlify.app/",
  },
    {
    id: 4,
    name: "POS",
    status: "Progressing",
    image: vch,
    project: "https://github.com/Joyy75/voucherApp",
  },
  {
    id: 5,
    name: "Vam Myanmar Estate",
    status: "Juniorshipped Project",
    image: vam,
    project: "https://vammyanmar.estate/",
  }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800 p-6 rounded-lg hover:shadow-xl shadow-inner shadow-blue-500 
            transform transition-transform duration-200 hover:scale-110 gap-2">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.status}</p>
              <a href={project.project} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Check</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;