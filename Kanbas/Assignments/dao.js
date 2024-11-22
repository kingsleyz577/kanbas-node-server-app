import Database from "../Database/index.js";

export const findAssignmentsForCourse = (courseId) => {
  const { assignments } = Database;
  return assignments.filter((a) => a.course === courseId);
};

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
};

export const deleteAssignment = (assignmentId) => {
  const { assignments } = Database;
  Database.assignments = assignments.filter((a) => a._id !== assignmentId);
  return { status: "OK" };
};

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  const { assignments } = Database;
  const assignment = assignments.find((a) => a._id === assignmentId);
  if (!assignment) {
    return null;
  }
  Object.assign(assignment, assignmentUpdates);
  return assignment;
};