import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'JongSik',
	title: "Hello! I'm JongSik",
	subTitle: "새로운 기술에 관심이 많고 팀원과 커뮤니케이션과 상호 피드백 및 리뷰를 좋아하는 개발자입니다.",
	role: "풀스택 개발자를 꿈꾸고 있는 이종식입니다😁",
	// TODO : 이력서 만들고 링크 걸기
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/JongsikLEE01',
	linkedin: 'https://screeching-bench-b7a.notion.site/dove-512d5b5a52234172b5640a2d77e44bc3?pvs=4',
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
			company: "WebSocket를 이용해 작성한 다중 채팅 프로그램입니다",
			date: "사용 기술 : Java",
			url: "https://github.com/JongsikLEE01/college_study/tree/master"
		},
		{
			role: "Web Market",
			company: "Bootstrap과 JSP의 이해를 위해 제작한 프로젝트입니다",
			date: "사용 기술 : JSP/Servlet, Bootstrap",
			url: "https://github.com/JongsikLEE01/Market"
		},
		{
			role: "TodoList",
			company: "FETCH, Hook, State를 이해하고 공부하기 위해서 제작한 Todo리스트입니다",
			date: "사용 기술 : React, SpringBoot",
			url: "https://github.com/JongsikLEE01/ReactGithub"
		},
		{
			role: "게시판 프로그램",
			company: "axios와 파일 처리, 스타일 정의를 이해하고 공부하기 위해서 제작한 게시판 프로그램입니다",
			date: "사용 기술 : React, SpringBoot",
			url: "https://github.com/JongsikLEE01/ReactGithub"
		},
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
	subTitle: "제가 작성하고있는 기술 블로그입니다",
	lists: [
		{
			title: "[Java] 채팅 프로그램 만들기",
			desc: "WebSocket을 사용해서 서버와 클라이언트 간의 다중 채팅 프로그램을 만듭니다.",
			url: "https://screeching-bench-b7a.notion.site/Awt-69cabc0318b949d692431387c7d6ec63"
		},
		{
			title: "[JSP] 로그인 화면 만들기",
			desc: "JSP와 Servlet를 사용해서 게시판을 만드는 시리즈입니다",
			url: "https://screeching-bench-b7a.notion.site/de274bfbb6ed4fe8b3cc4b1fa41784ee"
		},
		{
			title: "[JavaScript] 그림판 만들기",
			desc: "JavaScript를 이해하기 위해서 간단한 화면 클릭으로 색상을 바꾸고 마우스의 좌표를 기준으로 그림을 그리는 그림판입니다",
			url: "https://screeching-bench-b7a.notion.site/f8fc2c093942428ab69b28dcee910cfc"
		},
		{
			title: "[SpringSecurity] OAuth 이해하기",
			desc: "OAuth 이해를 위해 작성했으며 OAuth 구성요소와 인증 과정을 중심으로 작성했습니다",
			url: "https://screeching-bench-b7a.notion.site/OAuth-d44eaca238db4390bedbdc3138cd203f"
		},
		{
			title: "[React] React 시작하기",
			desc: "React를 공부하면서 React에 대한 개념, 학습 요소, React 사용 전과 후를 다루며 작성했습니다",
			url: "https://screeching-bench-b7a.notion.site/React-a3856275636141b295a734e13c8bc069"
		},
		{
			title: "[React + SpringBoot] 게시판 만들기",
			desc: "REST API를 이해하기 위해서 SpringBoot와 React를 이용해서 게시글과 파일을 업로드하고 수정, 삭제할 수 있는 프로젝트 입니다.",
			url: "https://screeching-bench-b7a.notion.site/4d8683e2a74e4c209775f3671d071dde"
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