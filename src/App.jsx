import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import styles from './App.module.css';
import Accordion from './components/Accordion';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactForm';

const sections = ["Inicio", "Servicios", "Quienes somos", "Contacto"];

export default function SinglePageApp() {
	const [activeSection, setActiveSection] = useState("Inicio");

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			let selectedSection = "Inicio";
			
			sections.forEach((section) => {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;
					if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight) {
						selectedSection = section;
					}
				}
			});
			setActiveSection(selectedSection);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="font-raleway text-gray-800">
			<nav className={`fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center gap-8 text-lg ${styles.navOverlay}`}>
				{sections.map((section) => (
					<a
						key={section}
						href={`#${section}`}
						className={`hover:text-gray-600 transition-colors ${
							activeSection === section ? "font-bold" : "font-normal"
						}`}
					>
						{section}
					</a>
				))}
			</nav>

			<div className="pt-16">
			{/* Sección Inicio */}
				<div
					id="Inicio"
					className="h-screen relative"
					style={{
						backgroundImage: 'url("/images/circuit-board-bg.jpg")',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="absolute inset-0 bg-black opacity-60"></div>
					<div className="relative z-10 h-full flex items-center justify-center">
						<div className={`text-white text-4xl md:text-6xl text-center ${styles.consolas}`}>
							<TypeAnimation
								sequence={[
									'Hardware y software',
									2000,
									'Mantenimiento',
									2000,
									'Venta de equipo de cómputo',
									2000,
								]}
								wrapper="div"
								cursor={true}
								repeat={Infinity}
								className="font-bold"
							/>
						</div>
					</div>
				</div>

			{/* Sección Servicios */}
			<div 
				id="Servicios"
				className="min-h-screen flex items-center justify-center py-16">
					<Accordion />
			</div>

			{/* Sección Quienes Somos */}
			<div 
			id="Quienes somos"
			className="min-h-screen flex flex-col items-center justify-center p-8"
			>
				<div className="w-[90%] mx-auto text-lg text-gray-700">
					<h2 className="text-3xl font-bold text-center mb-2">¿Quienes somos?</h2>
					<p className="mb-4">
						En Tecnosoluciones, nos especializamos en brindar soporte tecnológico integral para empresas y particulares. Contamos con un equipo de expertos en mantenimiento y reparación de equipos, venta e instalación de hardware, asesoría técnica y desarrollo de software a la medida.
					</p>
					<p className="mt-4">
						Nuestra misión es ofrecer soluciones eficientes y personalizadas, asegurando el óptimo funcionamiento de tus sistemas tecnológicos. Además, proporcionamos servicios en la nube y recuperación de datos para garantizar la continuidad y seguridad de tu información.
					</p>
					<p className="mt-4">
						Con un enfoque en la calidad, la innovación y el compromiso con nuestros clientes, en Tecnosoluciones nos aseguramos de que la tecnología trabaje a tu favor. ¡Contáctanos y descubre todo lo que podemos hacer por ti!
					</p>
				</div>
				<div className="w-full">
					<h4 className="text-xl font-bold  text-center my-8">Nuestro trabajo</h4>
					<ImageCarousel folder="carousel" direction="left" />
					<ImageCarousel folder="inverse" direction="right" />

				</div>
			</div>

			{/* Sección Contacto */}
			<div 
			id="Contacto"
			className="min-h-screen flex items-center justify-center p-8"
			>
			<ContactForm />
			</div>
		</div>
		<div className="bg-gray-800 text-white text-center py-4 flex justify-around">
			<div>
				<p>
					Hecho con ❤️ y React
				</p>
				<p>
					&copy; 2025 Tecnosoluciones
				</p>
			</div>
			<div>
				<p>
					<a href="http://diequint.com/privacy">Política de privacidad</a>
				</p>
			</div>
		</div>
	</div>
	);
}