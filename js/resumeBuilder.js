/*BIO SECTION*/
var bio = {
	"name" : "Gregory Onasis",
	"role" : "ITI Engineer",
	"contacts" :{
		"mobile" : "8333229773",
		"email" : "A00512729@gmail.com",
		"github" : "Gregomexl",
		"twitter" : "@grekohse",
		"location" : "Mexico City"
	},
	
	"welcomeMessage" : "Hello World!",
	"skills" : ["PHP", "HTML5", "CSS3", "JavaScript"],
	"biopic" : "images/profile.png"
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);

    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedbioEmail);

    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedbioGithub);

    var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedbioTwitter);

    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedbioLocation);

    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbiopic);

    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedbioMobile);

    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedbioEmail);

    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedbioGithub);

    var formattedbioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(formattedbioTwitter);

    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedbioLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

/*EDUCATION SECTION*/
var education = {
	"schools":[
		{
			"name" : "Insituto Tecnológico y de Estudios Superiores de Monterrey",
			"location" : "Tampico, TMPS, MX",
			"degree" : "BA",
			"date" : "2010-2015",
			"url": "http://www.itesm.mx",
			"majors" : ["CompSci", "English"],
		},
	],
	"onlineCourses":[
		{
			"title" : "Introducción para la Certificación PMP® - PMI",
			"school" : "Universidad Católica de M",
			"date" : 2014,
			"url" : "http://www.ucam.edu"
		},
		{
			"title" : "XAWT - Xirrus Authorized Wireless Technician",
			"school" : "Xirrus",
			"date" : 2014,
			"url" : "https://www.xirrus.com/"
		},
		{
			"title" : "Introduction to Networking",
			"school" : "Lynda.com",
			"date" : 2015,
			"url" : "http://www.lynda.com/ViewCertificate/0D1411B8470D437E8A60F7FCC8C503E1?utm_source=linkedin&utm_medium=sharing&utm_campaign=certificate"
		}]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);

    }
$("#education").append(HTMLonlineClasses);
    for (var onlinecourse in education.onlineCourses) {
        
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);

        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].date);
        $(".education-entry:last").append(formattedDates);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
        $(".education-entry:last").append(formattedUrl);
    }
};

education.display();

/*WORK SECTION*/

var work = {
	"jobs":[ 
		{
			"employer" : "Cisco Systems",
			"title" :  "Network Engineer (Trainee)",
			"dates" : "Apr 2015 - Current",
			"location" : "Mexico City, MX",
			"description" : "Support in projects of the company and Cisco Certifications student.",
		},
		{
			"employer" : "Athabasca University",
			"title" :  "Web Developer",
			"dates" : "May 2015 - Aug 2014",
			"location" : "Edmonton, AB, CA",
			"description" : "This job was a part of Mitacs Globalink Research Intership, a exchange program for students to have a experience in Canada, I worked in a team of two persons, for 4 months, Developing in Moodle as a platform using PHP, MySQL, AJAX.",
		},
		{
			"employer" : "doIT Mexico",
			"title" :  "Web Developer (Freelance)",
			"dates" : "Oct 2015 - Feb 2016",
			"location" : "Tampico, TMPS, MX",
			"description" : "My job was Develop a system that have an admistrator page and the web client using the Framework Laravel 5.1 and Blade for Laravel and Bootstrap. All this alone.",
		},
		{
			"employer" : "Beneficiencia Española Hospital",
			"title" :  "Sotfware Developer",
			"dates" : "Jan 2015 - Nov 2015",
			"location" : "Tampico, TMPS, MX",
			"description" : "My role in a team of 5 persons was the developing of a RESTful API using Laravel 5 and the mobile client in Swift (iOS), always using a strategy to provide a good resource for best coding practices.",
		},
		{
			"employer" : "Soluciones EXA, S.A. de C.V.",
			"title" :  "Network Engineer",
			"dates" : "Jan 2014 - Jul 2014",
			"location" : "Mexico City, MX",
			"description" : "Support in the Wireless Networking area of the company with the technology of Xirrus.",
		}]
};


work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display();
