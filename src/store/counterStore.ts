import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
interface CounterStore {
    count: number;
    increase: () => void;
    decrease: () => void
}

// combine은 결합을 해주는 미들웨어이다
{ /*
    1번째 인수에는 state의 초기값이 들어온다,
    2번째 인수에는 action 함수가 들어온다.
    combine은 따로 타입을 지정 해주지 않아도 자동으로 타입을 만들어서 보내준다.
    state와 action을 따로 관리할 수 있게 해준다.
    */}
{/*
    immer는 불변성을 지켜주는 미들웨어이다. 
    immer를 사용하면 state를 직접 수정하는 것처럼 보이지만, 실제로는 immer가 내부적으로 불변성을 유지하면서 상태를 업데이트해준다.
     immer를 사용하면 상태 업데이트 로직이 간결해지고, 불변성을 유지하는 데 신경쓰지 않아도 된다.
     immer는 상태 업데이트를 더 직관적으로 작성할 수 있게 해준다.
     immer를 사용하면 상태 업데이트 로직이 간결해지고, 불변성을 유지하는 데 신경쓰지 않아도 된다.
     immer는 상태 업데이트를 더 직관적으로 작성할 수 있게 해준다.
    */}
const useCounterStore = create(
    immer(
        combine({
            count: 0,
        }, (set, get) => ({
            increase: () => set((state) => {
                state.count += 1;
            }),
            decrease: () => set((state) => {
                state.count -= 1;
            })
        }))
    )
)

// export const useCounterStore = create<CounterStore>((set) => ({
//     count: 0,
//     increase: () => set((state) => ({
//         count: state.count + 1,
//     })),
//     decrease: () => set((state) => ({
//         count: state.count - 1,
//     }))
// }))

// custom hook으로 관리
// 객체분해할당으로 안 들고오고 인자에 state=>state... 이렇게 불러 오는 이유는
// state => state.count 하면 count만 불러와서 다른 값들은 리렌더링이 되게 하는 것을 막아버린다.
export const useCount = () => {
    const count = useCounterStore(state => state.count);
    return count;
};

export const useIncrease = () => {
    const increase = useCounterStore((state) => state.increase)
    return increase;
};

export const useDecrease = () => {
    const decrease = useCounterStore(state => state.decrease);
    return decrease;
}


