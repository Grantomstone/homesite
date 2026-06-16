export let projects = [
	{
		header: 'Cybersecurity CTF Project',
		description:
			'We created a cybersecurity challenge on portscanning that was part of the 2025 Commonwealth Cyberfusion Competition. For the challenge, we created an LED array corresponding to the ports being scanned, with the right scans finishing the security competition',
		points: [
			'Created the Server and LED driver implementations for the project',
			'Used Python multithreading and iptables to effeciently process 1000+ portscans/s',
			'Created a TUI for admins to setup the image to be displayed on the portscan, alongside operations to manage the competition itself',
			'Created serialization protocol for LED Driver to process and output Portscans'
		]
	},
	{
		header: 'DNS Server',
		description:
			'A C++ implementation of the DNS protocol to learn about networking in the language. Wrote a resolver that is compliant to the original specification of DNS.',
		points: [
			'compliant to RFC 1034 and RFC 1035',
			'Implemented the latest C++23 features including constexpr and structured bindings',
			'part of larger focus on building software from first principles'
		]
	},
	{
		header: 'SailBOT Design Team',
		description:
			'Part of a design team that make autonomous sailing boats to compete in edurance, speed, and autonomous vehicle challenges. Was the ECE-sub team lead for the team.',
		points: [
			"worked on integrating electrical and CS team's systems with mechanical teams designs",
			'worked on firmware of the Mast Motors and Integration of all Sensor systems with Sailing logic of CS Team',
			'Worked on PCB design for Connecting sensors and ensuring Correct power delivery to Mast and rudder Motors',
			'Team Achieved 2nd place in 2023 competition at Newburyport, MA'
		]
	},
	{
		header: 'Homelab Server',
		description:
			'A passion project where I operate various services like over-the-air music playing, file synchronisation, ad-blocking, and automation workflows on my own hardware',
		points: [
			'Use Tools like Caddy, docker, Wireguard, and init scripting to serve data securely only to approved devices',
			'Currently deployed over 25 services on my machines including seafile, n8n, pihole and calibre',
			'Ensure reliability in event of incidents like power outages'
		]
	},
	{
		header: 'Java Cloud Development',
		description:
			'Development of various Jakarta EE applications with Authentication and Database features on Cloud services',
		points: [
			'Deployed Java Enterprise Apps on AWS EC2 instances',
			'Developed features such as authentication, file upload, advanced forms, google maps directions, and AI chatbots',
			'used modern best practices for deployment of java apps in the real world'
		]
	},
	{
		header: 'Qt Desktop Application',
		description:
			'Developed an application to track nutrition information for foodstuffs, rank them, and provide healthier alternatives if asked for',
		points: [
			'used Python and Qt for the application',
			'used SCRUM methodology in teams of 4',
			'learned about cross-platform app development'
		]
	},
	{
		header: 'Wallpaper Generator Application',
		description:
			"A Python project inspired by 'Tapet' where I try to develop one of the wallpaper theme generators myself",
		points: [
			'learned image processing on python (openCV)',
			'learned about image generation and image formats',
			'I like not paying money'
		]
	}
];
