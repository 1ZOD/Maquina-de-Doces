<template>
    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="th in tableHeader" :key="th">
                        {{ th.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(td,i) in tableEntries.lexema" :key="td">
                    <td>{{ tableEntries.token[i] }}</td>
                    <td>{{ td }}</td>
                    <td>{{ tableEntries.descricao[i] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableData',
    props: {
        columns: Array,
        entries: Array
    },
    computed: {
        tableHeader() {
            return this.columns || []
        },
        tableEntries() {
            return this.entries || []
        }
    }
}
</script>

<style scoped>

.table {
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: normal;
    border: none;
    box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);
    width: 100%;
    border-collapse: collapse;
    max-width: 100%;
    overflow: hidden;
    background-color: white;
    margin-top: 1rem;
}

.table td, .table th {
    text-align: center;
    padding: 1rem;
    max-width: 10rem;
}

.table th {
    padding: 1.5rem 1rem;
    color: var(--black);
}

.table tbody {
    border-radius: 1rem;
    color: var(--gray-1);
}

.table tr:nth-child(odd) {
    background-color: var(--gray-4);
}

tr {
    border-radius: 1rem;
}

.table th {
    background-color: #FFF;
    border-radius: 1rem;
}


.table > thead {
    width: 100%;
}

</style>