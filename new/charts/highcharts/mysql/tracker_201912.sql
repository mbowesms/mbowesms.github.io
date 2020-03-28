-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: tracker
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `con_ed_sir`
--

DROP TABLE IF EXISTS `con_ed_sir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `con_ed_sir` (
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `con_ed_number` varchar(256) DEFAULT NULL,
  `developer` varchar(256) DEFAULT NULL,
  `developer_id` int(32) unsigned DEFAULT '0',
  `division` varchar(256) DEFAULT NULL,
  `division_id` int(32) unsigned DEFAULT '0',
  `zip_code` varchar(256) DEFAULT NULL,
  `substration` varchar(256) DEFAULT NULL,
  `ess_kw` int(32) unsigned DEFAULT '0',
  `program_complete` tinyint(4) DEFAULT '0',
  `application_date` date DEFAULT NULL,
  `acceptance_date` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `con_ed_sir`
--

LOCK TABLES `con_ed_sir` WRITE;
/*!40000 ALTER TABLE `con_ed_sir` DISABLE KEYS */;
INSERT INTO `con_ed_sir` VALUES (1,'MC-95997','Demand Energy',7,'Manhattan',1,'11040','e_75_st',200,0,'2014-08-22',''),(2,'MC-95992','Demand Energy',7,'Manhattan',1,'11040','w_42_st_1',100,1,'2014-08-22','2016-08'),(3,'MC-95990','Demand Energy',7,'Manhattan',1,'11040','seaport_2',100,1,'2014-08-22','2016-08'),(4,'MC-93294','Demand Energy',7,'Manhattan',1,'10016','e_36_st',100,1,'2014-08-07','2015-07'),(5,'MC-88593','Green Charge Networks',10,'Manhattan',1,'10036','w_50_st',300,1,'2014-07-14','2015-04'),(6,'MC-461253','Ashlawn Energy',3,'Brooklyn',2,'11223','bensonhurst_1',3,0,'2019-12-12',''),(7,'MC-459019','Raiden Electric',12,'Brooklyn',2,'10019','water_st',2400,0,'2019-11-29',''),(8,'MC-458340','Sunkeeper Solar',13,'Staten Island',5,'10007','fresh_kills',4250,0,'2019-12-03',''),(9,'MC-457674','Ashlawn Energy',3,'Brooklyn',2,'11223','bensonhurst_1',3,0,'2019-11-21',''),(10,'MC-457044','Raiden Electric',12,'Brooklyn',2,'10019','greenwood',4800,0,'2019-11-19',''),(11,'MC-456855','Agilitas Energy',1,'Queens',4,'11378','glendale',5000,0,'2019-11-18',''),(12,'MC-455484','Sunkeeper Solar',13,'Staten Island',5,'10007','fresh_kills',4250,0,'2019-11-11',''),(13,'MC-453648','Ameresco',2,'Queens',4,'11433','jamaica',2200,0,'2019-11-01',''),(14,'MC-451612','Raiden Electric',12,'Queens',4,'10019','glendale',4800,0,'2019-10-22',''),(15,'MC-451035','Raiden Electric',12,'Brooklyn',2,'10019','bensonhurst_2',2400,0,'2019-10-18',''),(16,'MC-449980','Raiden Electric',12,'Brooklyn',2,'10019','bensonhurst_2',2400,0,'2019-10-14',''),(17,'MC-449964','Raiden Electric',12,'Brooklyn',2,'11222','brownsville_1',2400,0,'2019-10-14',''),(18,'MC-449962','Raiden Electric',12,'Brooklyn',2,'10019','brownsville_1',2400,0,'2019-10-14',''),(19,'MC-449903','Raiden Electric',12,'Brooklyn',2,'10019','brownsville_1',2400,0,'2019-10-14',''),(20,'MC-449556','Raiden Electric',12,'Brooklyn',2,'10019','brownsville_1',1600,0,'2019-10-11',''),(21,'MC-449074','Raiden Electric',12,'Brooklyn',2,'10019','water_st',2400,0,'2019-10-09',''),(22,'MC-449058','Raiden Electric',12,'Brooklyn',2,'10019','brownsville_1',1600,0,'2019-10-09',''),(23,'MC-447313','Raiden Electric',12,'Brooklyn',2,'10019','water_st',1600,0,'2019-10-02',''),(24,'MC-447192','Agilitas Energy',1,'Staten Island',5,'10306','wainwright',4000,0,'2019-10-01',''),(25,'MC-444784','Raiden Electric',12,'Brooklyn',2,'10019','brownsville_1',4800,0,'2019-09-20',''),(26,'MC-444783','Radien Electric',12,'Brooklyn',2,'10019','brownsville_1',4800,0,'2019-09-20',''),(27,'MC-442492','Radien Electric',12,'Brooklyn',2,'10019','water_st',4800,0,'2019-09-10',''),(28,'MC-442415','Radien Electric',12,'Brooklyn',2,'10019','brownsville_1',4800,0,'2019-09-10',''),(29,'MC-441920','Enel X',8,'Brooklyn',2,'10001','water_st',5000,0,'2019-09-09',''),(30,'MC-439569','Borrego Solar Systems',4,'Staten Island',5,'10309','fresh_kills',5000,0,'2019-08-26',''),(31,'MC-438569','Raiden Electric',12,'Brooklyn',2,'10019','water_st',2400,0,'2019-08-21',''),(32,'MC-437571','Agilitas Energy',1,'Bronx',3,'10466','parkchester_2',1600,0,'2019-08-15',''),(33,'MC-436201','Radien Electric',12,'Brooklyn',2,'11211','brownsville_1',4800,0,'2019-08-08',''),(34,'MC-436079','Raiden Electric',12,'Brooklyn',2,'11211','water_st',4800,0,'2019-08-08',''),(35,'MC-435961','Raiden Electric',12,'Brooklyn',2,'11211','water_st',4800,0,'2019-08-07',''),(36,'MC-434988','Raiden Electric',12,'Brooklyn',2,'11222','water_st',4950,0,'2019-08-02',''),(37,'MC-432199','Raiden Electric',12,'Brooklyn',2,'11222','water_st',4950,0,'2019-07-19',''),(38,'MC-432194','Raiden Electric',12,'Brooklyn',2,'11222','water_st',4950,0,'2019-07-19',''),(39,'MC-430746','Raiden Electric',12,'Brooklyn',2,'10019','water_st',4950,0,'2019-07-12',''),(40,'MC-430568','Sustainable Energy LLC',14,'Queens',4,'11213','glendale',250,0,'2019-07-11',''),(41,'MC-430382','Raiden Electric',12,'Brooklyn',2,'10019','water_st',4950,0,'2019-07-10',''),(42,'MC-426717','Agilitas Energy',1,'Bronx',3,'10466','elmsford_no.2',3500,0,'2019-06-19',''),(43,'MC-424010','Agilitas Energy',1,'Brooklyn',2,'11214','bensonhurst_1',4000,0,'2019-06-05',''),(44,'MC-398718','Enel X',8,'Brooklyn',2,'10001','plymouth_st',800,0,'2019-01-25',''),(45,'MC-372959','EnerNOC',9,'Brooklyn',2,'10001','brownsville_2',2475,1,'2018-09-14','2019-11'),(46,'MC-370794','DB Engineering',6,'Staten Island',5,'10017','wainwright',1000,0,'2018-09-05',''),(47,'MC-363559','EnerNOC',9,'Manhattan',1,'10001','e_75_st',125,0,'2018-07-31',''),(48,'MC-353101','EnerNOC',9,'Manhattan',1,'10001','w_65_st_2',125,0,'2018-06-05',''),(49,'MC-352787','EnerNOC',9,'Brooklyn',2,'10001','brownsville_2',4900,1,'2018-06-04','2019-11'),(50,'MC-345023','DB Engineering',6,'Staten Island',5,'10017','fresh_kills',1000,0,'2018-04-25',''),(51,'MC-323347','Bright Power',5,'Queens',4,'10005','jamaica',18,0,'2018-01-05',''),(52,'MC-319212','DB Engineering',6,'Bronx',3,'10017','parkchester_2',1000,0,'2017-12-08',''),(53,'MC-286577','Demand Energy',7,'Manhattan',1,'11040','w_65_st_2',125,1,'2017-06-27','2017-12'),(54,'MC-286574','Demand Energy',7,'Manhattan',1,'11040','e_75_st',125,1,'2017-06-27','2017-12'),(55,'MC-282402','Demand Energy',7,'Manhattan',1,'10018','w_42_st_2',125,1,'2017-06-06','2017-12'),(56,'MC-272556','UniEnergy Technologies',15,'Bronx',3,'10461','parkchester_2',100,0,'2017-04-18',''),(57,'MC-252671','Demand Energy',7,'Bronx',3,'11040','sherman_creek',125,1,'2017-01-04','2018-10'),(58,'MC-252446','Bright Power',5,'Bronx',3,'10455','bruckner',18,1,'2017-01-03','2018-10'),(59,'MC-210555','Demand Energy',7,'Manhattan',1,'11040','hell_gate',100,0,'2016-06-14',''),(60,'MC-196280','Demand Energy',7,'Brooklyn',2,'10538','brownsville_1',300,1,'2016-03-10','2017-06'),(61,'MC-111552','Demand Energy',7,'Manhattan',1,'11040','hell_gate',100,1,'2014-11-18','2016-08'),(62,'MC-111548','Demand Energy',7,'Manhattan',1,'11040','e_63_st_1',100,1,'2014-11-18','2018-02'),(63,'MC-111541','Demand Energy',7,'Manhattan',1,'11040','w_65_st_2',100,1,'2014-11-18','2019-01'),(64,'MC-107924','Demand Energy',7,'Manhattan',1,'11040','hell_gate',100,1,'2014-10-29','2016-08'),(65,'1345615','Hitachi',11,'Brooklyn',2,'11220','greenwood',100,1,'2012-10-05','2013-10'),(66,'1334879','Urban Electric Power',16,'Manhattan',1,'10031','w_110_st_1',100,1,'2013-08-26','2014-03'),(67,'1320309','Green Charge Networks',10,'Queens',4,'11358','corona_2',50,1,'2012-12-09','2014-02'),(68,'1312777','Demand Energy',7,'Manhattan',1,'10007','leonard_st_2',200,1,'2012-05-13','2013-06'),(69,'1233462','Green Charge Networks',10,'Queens',4,'11377','newtown',50,1,'2013-04-24','2012-10');
/*!40000 ALTER TABLE `con_ed_sir` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-20 15:35:00
