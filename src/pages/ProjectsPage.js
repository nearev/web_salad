import AllProjects from "../components/content/AllProjects";

export default function Projects({ dummyData }) {
    return (
        <main>
            {/* <ProjectsBanner />
             */}
            <AllProjects dummyData={dummyData} />
        </main>
    );
}
