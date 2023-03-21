import { Link, useParams } from "react-router-dom";

export default function ProjectPage({ dummyData }) {
    const { name } = useParams();
    const project = dummyData.type.find((data) => data.name === name);
    console.log(project);
    return (
        <main>
            <div className="top-28 relative px-8">
                <span className="text-7xl font-bold">{name}</span>
                <ul>
                    {project.projects.map((project) => (
                        <li className=" pt-8">
                            <button className="peer transition ease-in-out duration-200 hover:scale-110">
                                <Link to={`/projects/${name}/${project.id}`}>
                                    <span className="text-2xl font-semibold">
                                        {project.name}
                                    </span>
                                </Link>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
