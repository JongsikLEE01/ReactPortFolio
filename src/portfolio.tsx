import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'JongSik',
	title: "Hallo I'm JongSik !",
	subTitle: "새로운 기술에 관심이 많고 팀원과 커뮤니케이션과 상호 피드백 및 리뷰를 좋아하는 개발자에요",
	role: "풀스택 개발자를 꿈꾸고 있는 이종식입니다😁",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/JongsikLEE01',
	// 노션 링크
	linkedin: 'Your linkedin link',
	email: 'sononot445@gmail.com',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: "I Can Do ⚡",
	subTitle: "제가 가지고있는 기술입니다",
	describeSkills: [
		"✔ 객체지향을 이해하고, 활용할 수 있습니다",
		"✔ Ajax를 활용해 비동기 통신으로 데이터를 요청할 수 있습니다",
		"✔ ES6와 이후 자바스크립트 문법을 사용할 수 있습니다",
		"✔ REST API를 이해하고 사용할 수 있습니다",
		"✔ 컴포넌트 생명주기와 속성을 사용할 수 있습니다",
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-java", text: "Java", proficiency: 80},
		{fontAwesome: "fab fa-java", text: "JSP", proficiency: 70},
		{fontAwesome: "fa fa-leaf", text: "Spring", proficiency: 80},
		{fontAwesome: "fa fa-database", text: "SQL", proficiency: 80},
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
	],
	view: true
};

export const experience = {
	// title: "Work Experience",
	title: "Toy Project 🚀",
	lists: [
		{
			role: "채팅 프로그램",
			company: "JAVA와 AWT를 이용해 만든 다중 채팅 프로그램입니다.",
			date: "JAVA와 AWT를 이용해 ",
		},
		{
			role: "Web Market",
			company: "JSP를 이용해 만든 WebMarket 프로그램입니다",
			date: "test",
		},
		{
			role: "게시판 프로그램",
			company: "React와 SpringBoot를 이용해 만든 게시판 프로그램입니다.",
			date: "test",
		},
		// {
		// 	role: "test",
		// 	company: "test",
		// 	date: "test",
		// }
	],
	view: true
}

export const openSourceProjects = {
	title: "Open Source Projects 💻",
	view: true
}

export const projects = {
	title: "Projects 👩‍💻",
	subTitle: "제가 진행한 프로젝트를 소개합니다",
	lists: [
		{
			title: "1인 가구를 위한 종합 서비스 플랫폼",
			desc: "SpringBoot를 기반으로 5명이 팀원이 4주간 개발한 프로젝트이며, 바쁜 사람들을 위해 청소, 빨래 등 종합적인 서비스를 제공하는 웹사이트입니다.",
			url: "#"
		},
		{
			title: "더조은 대학교 키오스크 시스템",
			desc: "JSP/Servlet 기반의 5명의 팀원이 2주일간 개발한 프로젝트이며, 대학교에서 정보를 알릴 수 있는 목적으로 만들어진 키오스크 프로그램입니다.",
			url: "https://github.com/JongsikLEE01/theJoeunUniversity"
		}
	],
	view: true
}

export const achievements = {
	// title: emoji("Achievements And Certifications 🏆"),
	// subTitle: "subtitle for achievement",
	title: "",
	subTitle: "",
	lists: [
		// {
		// 	img: "",
		// 	alt: "I'm sad..",
		// 	title: "There is no Achievement...😥",
		// 	desc: "I'll try harder!"
		// },
		// {
		// 	img: "",
		// 	alt: "I'm sad..",
		// 	title: "There is no Certification...😥",
		// 	desc: "I'll try harder!"
		// },
	],
	view: true
};

export const blogs = {
	title: "My Posts 📰",
	subTitle: "작성하고있는 기술 블로그입니다",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "안녕하세요 풀스택 개발자를 꿈꾸는 이종식입니다",
	introduce: "새로운 기술에 관심이 많고 상호 커뮤니케이션을 좋아해요😃",
	view: true
}