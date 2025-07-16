import { useRecoilState } from "recoil";
import { kanbanState } from "../recoil/atom";


const useKanbanState = () => {
    const [kanban, setKanban] = useRecoilState(kanbanState);

    const addToKanban = (kanbanItem) => setKanban(state => [...state, kanbanItem])

    return { kanban, setKanban, addToKanban }
}

export { useKanbanState };

