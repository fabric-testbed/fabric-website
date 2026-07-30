export interface Stat {
  value:  string;
  label:  string;
  detail?: string;
}

export const stats: Stat[] = [
  { value: "—", label: "Total Slices",              detail: "A slice is a collection of logically-related resources—or slivers—used in one or more experiments. This number represents the total amount of slices created to date on FABRIC." },
  { value: "—", label: "Total Users",               detail: "The total number of individuals signed up as FABRIC Users." },
  { value: "—", label: "FABRIC User Publications",  detail: "The total number of papers and publications that reference the use of FABRIC." },
  { value: "—", label: "Active Slices",             detail: "A slice is a collection of logically-related resources—or slivers—used in one or more experiments. This number represents the current amount of slices that are actively being used in a project." },
  { value: "—", label: "Total Projects",            detail: "A project is the term used to represent a logical grouping of users working on one or more related experiments over a period of time. Rights to resources are set at the project level." },
];
