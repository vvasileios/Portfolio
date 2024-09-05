import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            activeSection: "about",
        };
    },

    getters: {
        getActiveSection(state) {
            return state.activeSection;
        },
    },

    mutations: {
        SET_ACTIVE_SECTION(state, section) {
            state.activeSection = section;
        },
    },

    actions: {
        updateActiveSection({ commit }, section) {
            commit("SET_ACTIVE_SECTION", section);
        },
    },
});
