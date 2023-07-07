import './resume.css';

const config = {
    "contactInfo": {
        "name": "Mary Oh",
        "email": "mary.christine.oh@gmail.com",
        "firstLink": "https://linkedin.com/in/maryoh/",
        "secondLink": "https://github.com/maryoohhh/"
    },
    "summary": "Currently pursuing master’s degree in computer science with experience in scripting with SQL and working with large database.",
    "workExperience": [
        {
        "title": "Product Specialist II",
        "company": "Spacelabs Healthcare",
        "location": "Snoqualmie, WA",
        "date": "May ’22 – Present",
        "bulletPoints": [
            "Collaborated with cross-functional teams on onboarding new product and developed service plan",
            "Developed service notes for field instructions and troubleshooting to reduce case volume by 20%"
        ]
        },
        {
        "title": "Product Specialist",
        "company": "Spacelabs Healthcare",
        "location": "Snoqualmie, WA",
        "date": "Jan ’21 – May ‘22",
        "bulletPoints": [
            "Worked on average 10 cases per week with Technical Support, Field Service, and customers to identify, replicate, and debug hardware, software, and network problems",
            "Evaluated failures, bugs, systemic and hardware problems throughout the product life cycle",
            "Ensured rapid resolution of product issues and all documents is following global regulations",
            "Primary interface between customers, field service, sales, marketing associates, and leadership associates for the assigned products"
        ]
        },
        {
        "title": "Upstream Manufacturing Associate I",
        "company": "AGC Biologics",
        "location": "Bothell, WA",
        "date": "Aug ’20 – Dec ‘20",
        "bulletPoints": [
            "Performed bioprocess operations to produce antibodies using stainless steel and single-use technology",
            "Maintained records to comply with regulatory requirements and performs daily in-process testing",
            "Assisted in revising of 2 batch records and 1 SOP to improve process flow and clarity"
        ]
        },
        {
        "title": "Manufacturing Support Technician",
        "company": "AGC Biologics",
        "location": "Bothell, WA",
        "date": "Aug '19 - Aug ’20",
        "bulletPoints": [
            "Supported product process unit operations per SOP – operate Parts Washer and Autoclave",
            "Compounded media and buffers – from 100 to 2000 L using SUM and magnetic mixer",
            "Documented and reviewed logbooks and manufacturing batch records"
        ]
        }
    ],
    "certificate": [
        {
            "title": "AWS Certified Cloud Practitioner",
            "company": "Amazon Web Services (AWS)",
            "date": "Jul ’21 – Jul ‘24"
        }
    ],
    "education": [
        {
        "school": "City University of Seattle",
        "location": "Seattle, WA",
        "degree": "Masters of Science",
        "major": "Computer Science",
        "date": "Apr ’20 – Jun ‘23"
        },
        {
        "school": "Arizona State University",
        "location": "Tempe, AZ",
        "degree": "Bachelors of Science in Engineering",
        "major": "Biomedical Engineering",
        "date": "Aug ’14 - May ‘19"
        }
    ],
    "skills": [
        "Python",
        "SQL/NoSQL",
        "R",
        "MATLAB",
        "Power BI",
        "C#",
        "SolidWorks",
        "Cloud Compute (AWS, Azure)",
        "React Native",
        "SPSS",
        "HTML",
        "CSS",
        "Git",
        "Scrum"
    ]
}

export default function Resume(){
    return (
        <div>
            <div className="contactinfo">
                <h1>{config.contactInfo.name}</h1>
                <h2>{config.contactInfo.title}</h2>
                <a href={`mailto:${config.contactInfo.email}`}>{config.contactInfo.email}</a>
                {config.contactInfo.firstLink && (
                    <>
                        <span className="mx-1"> | </span>
                        <a href={config.contactInfo.firstLink}>{config.contactInfo.firstLink}</a>
                    </>
                )}
                {config.contactInfo.secondLink && (
                    <>
                        <span className="mx-1"> | </span>
                        <a href={config.contactInfo.secondLink}>{config.contactInfo.secondLink}</a>
                    </>
                )}
            </div>
        
            <div className="summary">
                <h2>Summary</h2>
                <hr className="border-solid border-1" />
                <p>{config.summary}</p>
            </div>
            
            <div className="workexperience">
                <h2>Work Experience</h2>
                <hr className="border-solid border-1" />
                <ul className="ml-2">
                    {config.workExperience.map((workExperience, i) => (
                        <li key={workExperience.company} className={i % 2 ? `mt-1` : `mt-half`}>
                            <div className="text-center">
                                <h4>{workExperience.title}</h4>
                                <span className="ml-auto text-muted">{workExperience.company}, {workExperience.location} | {workExperience.date}</span>
                            </div>
                            <p>{workExperience.description}</p>
                            <ul className="ml-3">
                                {workExperience.bulletPoints.map((bulletPoint) => (
                                    <li key={bulletPoint}>{bulletPoint}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="certificate">
                <h2>Certificate</h2>
                <hr className="border-solid border-1" />
                <ul className="ml-2">
                    {config.certificate.map((certificate, i) => (
                        <li key={certificate.company} className={i % 2 ? `mt-1` : `mt-half`}>
                            <div className="text-center">
                                <h3>
                                    {certificate.title}, {certificate.company}
                                </h3>
                                <span className="ml-auto text-muted">{certificate.date}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="education">
                <h2>Education</h2>
                <hr className="border-solid border-1" />
                <ul className="ml-2">
                    {config.education.map((education, i) => (
                        <li key={education.school} className={i % 2 ? `mt-1` : `mt-half`}>
                            <div className="text-center">
                                <h3>
                                    {education.school} - {education.location}
                                </h3>
                                <span className="ml-auto text-muted">{education.date}</span>
                            </div>
                            <h4>
                                {education.degree}, {education.major}
                            </h4>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="skills">
                <h2>Skills</h2>
                <hr className="border-solid border-1" />
                {config.skills.map((skill) => (
                    <p className="inline-block">
                        <span className="mx-1">•</span>
                        <span>{skill}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};
