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
      const githubRepos = await fetch(
        "https://api.github.com/users/chocolateofpain/repos"
      );
      const projects = await githubRepos.json();
      context.commit("loadProjects", projects);
    },
  },
  modules: {},
});
