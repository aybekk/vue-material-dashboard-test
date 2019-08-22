<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
                <form @submit.prevent="addBooks">
                    <md-card>

                        <md-card-header data-background-color="purple">
                            <h4 class="title">Добавление книги</h4>
                        </md-card-header>

                        <md-card-content>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Название книги </label>
                                        <md-input v-model="name" type="text"></md-input>
                                    </md-field>
                                    <div class="form-group">
                                        <p>Файл книги</p>
                                        <input id="book" @change="onAttachmentSaveBook" type="file" name="book"
                                               style="opacity: 1; position: static;"
                                               required="">
                                    </div>
                                    <md-field>
                                        <label>Автор </label>
                                        <md-input v-model="author" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Год</label>
                                        <md-input v-model="year" type="text"></md-input>
                                    </md-field>
                                    <md-field style="flex-wrap: wrap;">
                                        <labal for="language">Язык</labal>
                                        <select name="language" style="width: 100%;" class="form-control" id="language"
                                                v-model="language" required="">
                                            <option value="">Выберите язык</option>
                                            <option value="kz">Казахский</option>
                                            <option value="ru">Русский</option>
                                            <option value="en">Английский</option>
                                        </select>
                                    </md-field>
                                    <md-field style="flex-wrap: wrap;" v-if="getSubjects">
                                        <labal >Дисциплины (Зажмите Ctrl, чтобы выбрать несколько)</labal>
                                        <select  v-model="subjects" multiple class="form-control"
                                                style="width: 100%; height: 200px;">

                                            <option v-if="getSubjects.hums.length !== 0" value="" style="color: #6e79ff" disabled>ГУМАНИТАРНО-ТЕХНИЧЕСКИЕ</option>
                                            <option v-for="item in getSubjects.hums" :value="item.id">
                                                --> {{ item.name }}
                                            </option>

                                            <option v-if="getSubjects.medicals.length !== 0" value="" style="color: #6e79ff" disabled>МЕДИЦИНСКИЕ</option>
                                            <option v-for="item in getSubjects.medicals" :value="item.id">
                                                --> {{ item.name }}
                                            </option>

                                            <option v-if="getSubjects.others.length !== 0" value="" style="color: #6e79ff" disabled>ДРУГИЕ</option>
                                            <option v-for="item in getSubjects.others" :value="item.id">
                                                --> {{ item.name }}
                                            </option>

                                        </select>

                                    </md-field>

                                    <div class="form-group">
                                        <p>Постер книги</p>
                                        <input id="poster" @change="onAttachmentSavePoster" type="file" name="poster"
                                               style="opacity: 1; position: static;">
                                    </div>
                                    <br><br>


                                </div>
                                <div class="md-layout-item md-size-100">
                                    <md-button type="submit" class="md-raised md-primary md-block">Добавить книгу
                                    </md-button>
                                </div>
                            </div>
                        </md-card-content>

                    </md-card>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                author: '',
                book: '',
                poster: '',
                year: '',
                language: '',
                subjects: [],
            };
        },
        computed: {
            getSubjects() {
                return this.$store.getters['subject/Subjects'];
            },
        },
        beforeMount() {
            this.$store.dispatch('subject/getList')
        },
        methods: {
            addBooks() {
                this.$store.dispatch('book/store', {
                    name: this.name,
                    author: this.author,
                    book: this.book,
                    poster: this.poster,
                    year: this.year,
                    language: this.language,
                    subjects: Array.from(this.subjects),
                })
                    .then(response => {
                        this.$router.push('/admin/books');
                    }).catch(error => {
                    this.errorNotify();
                });
            },
            onAttachmentSaveBook (e) {
                this.book = e.target.files[0];
            },
            onAttachmentSavePoster (e) {
                this.poster = e.target.files[0]
            },
            errorNotify() {
                this.$notify({
                    message: "Ошибка сохранения!",
                    icon: "add_alert",
                    horizontalAlign: 'center',
                    verticalAlign: 'top',
                    type: 'danger'
                });
            }
        }
    };
</script>
