--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts (
    username character varying NOT NULL,
    email character varying NOT NULL,
    createddate date NOT NULL,
    gender character varying,
    id integer NOT NULL
);


ALTER TABLE public.accounts OWNER TO postgres;

--
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_id_seq OWNER TO postgres;

--
-- Name: accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;


--
-- Name: eventlist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventlist (
    id integer NOT NULL,
    title character varying NOT NULL,
    address character varying NOT NULL,
    gpslocation character varying NOT NULL,
    description character varying,
    size integer NOT NULL,
    date date,
    "time" time without time zone,
    user_id integer
);


ALTER TABLE public.eventlist OWNER TO postgres;

--
-- Name: eventlist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.eventlist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.eventlist_id_seq OWNER TO postgres;

--
-- Name: eventlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.eventlist_id_seq OWNED BY public.eventlist.id;


--
-- Name: friendslist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.friendslist (
    id integer NOT NULL,
    friends integer[]
);


ALTER TABLE public.friendslist OWNER TO postgres;

--
-- Name: pwas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pwas (
    id integer NOT NULL,
    password character varying NOT NULL,
    username character varying NOT NULL
);


ALTER TABLE public.pwas OWNER TO postgres;

--
-- Name: pwas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pwas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pwas_id_seq OWNER TO postgres;

--
-- Name: pwas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pwas_id_seq OWNED BY public.pwas.id;


--
-- Name: user_session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.user_session OWNER TO postgres;

--
-- Name: accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);


--
-- Name: eventlist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventlist ALTER COLUMN id SET DEFAULT nextval('public.eventlist_id_seq'::regclass);


--
-- Name: pwas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pwas ALTER COLUMN id SET DEFAULT nextval('public.pwas_id_seq'::regclass);


--
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT public.accounts (username, email, createddate, gender, id) FROM stdin;
user1	email1@gmail.com	2021-01-19	M	1
user2	email2@gmail.com	2021-01-19	F	2
user3	email3@gmail.com	2021-01-19	M	3
user4	email4@gmail.com	2021-01-19	M	4
user5	email5@gmail.com	2021-01-19	F	5
\.


--
-- Data for Name: eventlist; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT public.eventlist (id, title, address, gpslocation, description, size, date, "time", user_id) FROM stdin;
5	Cineplexx Millennium City	Wehlistraße 66, 1200 Wien	48.2406771609089, 16.38543928963921	Film schauen(The Batman)	4	2021-03-04	19:45:00	4
4	Prater Dome	Riesenradplatz 7, 1020 Wien	48.217304653463664, 16.39773345469906	Feiern	8	2021-03-05	20:00:00	3
2	McDonald's	Schloßhofer Str. 13-15, 1210 Wien	48.258022872201494, 16.40304484753373	Frühstück bei McDonald's	3	2021-01-28	18:10:00	1
3	Hugo-Wolf-Park	Hartäckerstraße 80, 1190 Wien	48.23917360536873, 16.334578828273422	Geburtstagsfeier im Park	12	2021-02-06	17:00:00	2
7	Asiannights Lao-Thai Cuisine & Bar	2905 N Beach St, Haltom City, TX 76111, Vereinigte Staaten	32.797161245983965, -97.29073825135526	Asiatisch 	3	2021-01-27	15:30:00	4
8	Türkenschanz Park	Hasenauerstraße Türkenschanzpark, 1180 Wien	48.23495924015223, 16.33369550041071	Fußball spielen	5	2021-01-24	14:00:00	1
10	Donauzentrum	Wagramer Str. 94, 1220 Wien	48.24228572655375, 16.436403479840376	shoppen	4	2021-01-30	15:00:00	2
11	Wienerwald		48.10446609062101, 16.134132539914603	Wandern im Wald	5	2021-03-03	08:00:00	5
9	Wien Oberdöbling Bahnhof		48.2443946081875, 16.344539249157606	Döner essen	3	2021-01-27	15:20:00	2
12	R Hotel Kingston, Jamaika	2 Renfrew Rd, Kingston, Jamaika	18.012140293742444, -76.7868301294718	Urlaub in Jamaika	4	2021-07-09	16:20:00	3
1	HTL Wien West	Thaliastraße 125, 1160 Wien	48.212060793376395, 16.313418947246383	Schule :)	10	2021-01-20	09:30:00	1
6	Flex	Augartenbrücke 1, 1010 Wien	48.218129950706704, 16.370993649857972	Feiern	13	2021-02-19	20:15:00	5
13	Stephansplatz	Stephansplatz 3, 1010 Wien	48.20846167621008, 16.373835265189	Stephansdom Besichtigung	6	2021-01-28	15:00:00	4
\.


--
-- Data for Name: friendslist; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT public.friendslist (id, friends) FROM stdin;
1	{2,3,4,5}
2	{1,3,4,5}
3	{1,2}
4	{1,2,5}
5	{1,2,4}
\.


--
-- Data for Name: pwas; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT public.pwas (id, password, username) FROM stdin;
5	password5	user5
4	password4	user4
2	password2	user2
3	password3	user3
1	password1	user1
\.


--
-- Data for Name: user_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT public.user_session (sid, sess, expire) FROM stdin;
\.


--
-- Name: accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_id_seq', 1, false);


--
-- Name: eventlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventlist_id_seq', 2, true);


--
-- Name: pwas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pwas_id_seq', 1, false);


--
-- Name: accounts accounts_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pk PRIMARY KEY (id);


--
-- Name: eventlist eventlist_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventlist
    ADD CONSTRAINT eventlist_pk PRIMARY KEY (id);


--
-- Name: friendslist friendslist_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.friendslist
    ADD CONSTRAINT friendslist_pk PRIMARY KEY (id);


--
-- Name: pwas pwas_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pwas
    ADD CONSTRAINT pwas_pk PRIMARY KEY (id);


--
-- Name: user_session user_session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_session
    ADD CONSTRAINT user_session_pkey PRIMARY KEY (sid);


--
-- Name: IDX_session_expire; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_session_expire" ON public.user_session USING btree (expire);


--
-- Name: accounts_email_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX accounts_email_uindex ON public.accounts USING btree (email);


--
-- Name: accounts_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX accounts_id_uindex ON public.accounts USING btree (id);


--
-- Name: accounts_userid_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX accounts_userid_uindex ON public.accounts USING btree (username);


--
-- Name: eventlist_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX eventlist_id_uindex ON public.eventlist USING btree (id);


--
-- Name: friendslist_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX friendslist_id_uindex ON public.friendslist USING btree (id);


--
-- Name: pwas_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pwas_id_uindex ON public.pwas USING btree (id);


--
-- Name: eventlist eventlist_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventlist
    ADD CONSTRAINT eventlist_users_fk FOREIGN KEY (user_id) REFERENCES public.accounts(id);


--
-- Name: friendslist friendslist_user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.friendslist
    ADD CONSTRAINT friendslist_user_fk FOREIGN KEY (id) REFERENCES public.accounts(id);


--
-- Name: pwas pwas_accounts_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pwas
    ADD CONSTRAINT pwas_accounts_fk FOREIGN KEY (id) REFERENCES public.accounts(id);


--
-- PostgreSQL database dump complete
--

