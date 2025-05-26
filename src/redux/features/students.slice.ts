import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EditDialog, FieldType } from '../../types'


export interface StudentState {
    students: FieldType[];
    editDeleteDialog: EditDialog;
}


const initialState: StudentState = {
    students: JSON.parse(localStorage.getItem("students") || "[]"),
    editDeleteDialog: { isOpen: false, type: "edit", id: null },
}

export const StudentState = createSlice({
    name: 'students',
    initialState,
    reducers: {
        createStudent: (state, action: PayloadAction<FieldType>) => {
            state.students.push(action.payload)
            localStorage.setItem("students", JSON.stringify(state.students))
        },
        editStudent: (state, action: PayloadAction<FieldType>) => {
            let index = state.students.findIndex((i) => i.id === action.payload.id)

            if (index !== -1) {
                state.students[index] = action.payload
                localStorage.setItem("students", JSON.stringify(state.students))
            }
        },
        deleteStudent: (state, action: PayloadAction<number>) => {
            state.students = state.students.filter((product: FieldType) => product.id !== action.payload)

            localStorage.setItem("students", JSON.stringify(state.students))
        },
        setEditDeleteDialog: (state, action: PayloadAction<EditDialog>) => {
            state.editDeleteDialog = action.payload
            localStorage.setItem("students", JSON.stringify(state.students))
        }
    },
})

export const { createStudent, deleteStudent, setEditDeleteDialog, editStudent } = StudentState.actions
export default StudentState.reducer
