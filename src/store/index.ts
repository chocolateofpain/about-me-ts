import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [],
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  mutations: {
    loadProjects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchProjects(context) {
      const projects = await fetch(
        "https://api.github.com/users/chocolateofpain/repos"
      );
      context.commit("loadProjects", projects);
      return projects;
    },
  },
  modules: {},
});
