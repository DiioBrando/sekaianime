/**
 * Базовый конфиг с общими полями для всех типов
 */
export type ConfigParams = {
    filter?: string; // Список значений, которые будут в ответе
    remove?: string; // Список значений, которые будут удалены из ответа
    include?: string; // Список типов файлов, возвращаемых в виде base64 строки
    description_type?: string; // Тип получаемого описания, подробнее: plain
    playlist_type?: string; // Формат списка серий, object или array: object
};

/**
 * Поля для пагинации, используемые в некоторых типах
 */
export type PaginationParams = {
    limit?: number; // Количество объектов в ответе, по умолчанию: 5
    after?: number; // Удаляет первые n записей из выдачи
    page?: number; // Номер страницы
    items_per_page?: number; // Количество элементов на странице
};

/**
 * Поля для сортировки, используемые в поисковых типах для тайтлов
 */
export type SortingParams = {
    order_by?: string; // Ключ для сортировки результатов
    sort_direction?: number; // Направление сортировки: 0 - по возрастанию, 1 - по убыванию, по умолчанию: 0
};

/**
 * Тип для запросов обновлений тайтлов
 */
export type UpdatesParams = ConfigParams & PaginationParams & {
    since?: number; // Список тайтлов с временем обновления больше указанного timestamp
};

/**
 * Тип для запросов списков тайтлов
 */
export type ListParams = ConfigParams & PaginationParams & {
    d_list?: string; // Список ID тайтлов
    code_list?: string; // Список кодов тайтлов
    torrent_id_list?: string; // Список ID торрент-файлов
};

/**
 * Тип для запросов конкретного тайтла
 */
export type TitleParams = ConfigParams & {
    id?: number; // ID тайтла
    code?: string; // Код тайтла
    torrent_id?: number; // ID торрент-файла
};

/**
 * Тип для запросов изменений тайтла
 */
export type ChangesParams = ConfigParams & PaginationParams & {
    since?: number; // Список тайтлов с временем обновления больше указанного timestamp
};

/**
 * Тип для запросов расписания тайтла
 */
export type ScheduleParams = ConfigParams & {
    days?: string; // Список дней недели для расписания
};

/**
 * Тип для случайного выбора тайтла
 */
export type RandomParams = ConfigParams;

/**
 * Тип для поисковых запросов тайтлов
 */
export type SearchParams = ConfigParams & PaginationParams & SortingParams & {
    search?: string; // Поиск по именам и описаниям
    year?: string; // Список годов выпуска
    type?: string; // Список типов через запятую
    season_code?: string; // Список сезонов, подробнее
    genres?: string; // Список жанров
    team?: string; // Поиск по командам, список ников через запятую
    voice?: string; // Список ников через запятую
    translator?: string; // Список ников через запятую
    editing?: string; // Список ников через запятую
    decor?: string; // Список ников через запятую
    timing?: string; // Список ников через запятую
};

/**
 * Тип для расширенного поиска тайтлов
 */
export type TSearchAdvanced = ConfigParams & PaginationParams & SortingParams & {
    query?: string; // Обязательный фильтр для выборки, подробнее
    simple_query?: string; // Обязательный упрощённый фильтр для выборки, подробнее
};

/**
 * Тип для запросов по франшизам тайтлов
 */
export type FranchisesParams = ConfigParams & {
    id?: number; // ID тайтла
};

/**
 * Тип для запросов списка франшиз тайтлов
 */
export type FranchiseListParams = ConfigParams & PaginationParams;