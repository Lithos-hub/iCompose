import { computed } from 'vue';
import { useStore } from 'vuex';

const mapState = () => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store.state).map(
      (getter) => [getter, computed(() => store.state[getter])],
    ),
  );
};

export default mapState;
