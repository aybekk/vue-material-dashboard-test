<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-75 md-small-size-80 md-xsmall-size-100 md-size-50">
                <form @submit.prevent="editBook">
                    <md-card>

                        <md-card-header data-background-color="purple">
                            <h4 class="title">Редактирование книги</h4>
                        </md-card-header>

                        <md-card-content>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-100">
                                    <md-field>
                                        <label>Название книги </label>
                                        <md-input v-model="name_val" type="text"></md-input>
                                    </md-field>
                                    <div class="form-group">
                                        <p>Файл книги</p>
                                        <p>Оставьте пустым, если не хотите менять</p>
                                        <input id="book" @change="onAttachmentSaveBook" type="file" name="book"
                                               style="opacity: 1; position: static;">
                                    </div>
                                    <md-field>
                                        <label>Автор </label>
                                        <md-input v-model="author_val" type="text"></md-input>
                                    </md-field>
                                    <md-field>
                                        <label>Год</label>
                                        <md-input v-model="year_val" type="text"></md-input>
                                    </md-field>
                                    <md-field style="flex-wrap: wrap;">
                                        <labal for="language">Язык</labal>
                                        <select name="language" style="width: 100%;" class="form-control" id="language"
                                                v-model="language_val" required="">
                                            <option value="">Выберите язык</option>
                                            <option value="kz">Казахский</option>
                                            <option value="ru">Русский</option>
                                            <option value="en">Английский</option>
                                        </select>
                                    </md-field>
                                    <md-field style="flex-wrap: wrap;">
                                        <labal for="subjects">Дисциплины (Зажмите Ctrl, чтобы выбрать несколько)</labal>
                                        <select v-if="getSubjects" v-model="subjects" multiple class="form-control"
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
                                        <p>Оставьте пустым, если не хотите менять</p>
                                        <input id="poster" @change="onAttachmentSavePoster" type="file" name="poster"
                                               style="opacity: 1; position: static;">
                                    </div>
                                    <br><br>


                                </div>
                                <div class="md-layout-item md-size-100">
                                    <md-button type="submit" class="md-raised md-primary md-block">Обновить книгу
                                    </md-button>
                                </div>
                            </div>
                        </md-card-content>

                    </md-card>
                </form>
            </div>
        </div>
        <input type="hidden" v-model="subjects_val">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                author: '',
                year:'',
                book:'',
                poster:'',
                language:'',
                subjects:[],
            };
        },
        computed: {
            BookSubjects() {
                return this.$store.getters['book/BookSubjects'];
            },
            getSubjects() {
                return this.$store.getters['subject/Subjects'];
            },

            name_val: {
                get () {
                    if(this.getBook) {
                        this.name = this.getBook.name;
                        return this.getBook.name;
                    }
                },
                set (value) {
                    this.name = value;
                }
            },
            author_val: {
                get () {
                    if(this.getBook) {
                        this.author = this.getBook.author;
                        return this.getBook.author;
                    }
                },
                set (value) {
                    this.author = value;
                }
            },
            year_val: {
                get () {
                    if(this.getBook) {
                        this.year = this.getBook.year;
                        return this.getBook.year;
                    }
                },
                set (value) {
                    this.year = value;
                }
            },
            language_val: {
                get () {
                    if(this.getBook) {
                        this.language = this.getBook.language;
                        return this.getBook.language;
                    }
                },
                set (value) {
                    this.language = value;
                }
            },
            subjects_val: {
                get () {
                    this.subjects = this.BookSubjects;
                },
            },
            getBook() {
                return this.$store.getters['book/Book'];
            }
        },

        methods: {
            editBook() {
                this.$store.dispatch('book/update', {
                    id: this.$route.params.id,
                    name: this.name,
                    author: this.author,
                    book: this.book,
                    poster: this.poster,
                    year: this.year,
                    language: this.language,
                    subjects: Array.from(this.subjects),
                }).then(response => {
                    this.$router.push('/admin/books');
                }).catch(error => {

                });
            },
            onAttachmentSaveBook(e) {
                if(e.target.files[0]) {
                    this.book = e.target.files[0];
                } else {
                    this.book = null
                }

            },
            onAttachmentSavePoster(e) {
                if(e.target.files[0]) {
                    this.poster = e.target.files[0];
                } else {
                    this.poster = null
                }
            },
            errorNotify() {
                this.$notify({
                    message: "Ошибка сохранения!",
                    icon: "add_alert",
                    horizontalAlign: 'center',
                    verticalAlign: 'top',
                    type: 'danger'
                });
            },

        },
        beforeMount() {
            this.$store.dispatch('book/getBook', {
                id: this.$route.params.id,
            });

            this.$store.dispatch('subject/getList');

            this.$store.dispatch('book/getBookSubjects', {
                id: this.$route.params.id,
            });
        }

    };
</script>
