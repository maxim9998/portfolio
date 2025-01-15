import { FaUsers, FaClipboardList, FaBriefcase, FaRegHandshake } from "react-icons/fa";

export interface ISoftSkill {
  icon: JSX.Element;
  name: string;
  description: string;
}

export const softSkills: ISoftSkill[] = [
  {
    icon: <FaUsers className="text-5xl text-green" />,
    name: "Teamwork",
    description: "Collaborating effectively with colleagues and stakeholders to achieve shared goals.",
  },
  {
    icon: <FaClipboardList className="text-5xl text-green" />,
    name: "Time Management",
    description: "Efficiently prioritizing tasks to meet deadlines and maintain work-life balance.",
  },
  {
    icon: <FaBriefcase className="text-5xl text-green" />,
    name: "Project Management",
    description: "Organizing and leading projects to completion while managing resources and timelines.",
  },
  {
    icon: <FaRegHandshake className="text-5xl text-green" />,
    name: "Communication",
    description: "Clear and effective communication with team members and clients, both written and verbal.",
  },
];
