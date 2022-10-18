/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable no-console */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Subject } from 'rxjs';
import Vueheatmap from './heatmap';
// import { debounce } from 'lodash';
import App from './App';

const stream = new Subject();
export const pauser = new Subject();

// eslint-disable-next-line no-unused-vars
const data = { 7: [[1093.0, 721.5], [1085.0, 751.0], [1088.5, 762.0], [1091.0, 773.0], [1106.5, 776.0], [1120.0, 773.0], [1136.5, 772.5], [1148.0, 774.5], [1160.0, 779.0], [1170.5, 786.0], [1179.5, 793.0], [1192.5, 795.0], [1203.0, 791.5], [1212.0, 787.0], [1229.5, 790.5], [1247.0, 793.0], [1257.5, 798.0], [1269.0, 802.0], [1281.5, 803.5], [1292.5, 803.5], [1315.5, 796.5], [1329.5, 794.0], [1339.0, 790.5], [1359.5, 785.0], [1377.5, 784.5], [1388.0, 785.5], [1404.0, 788.5], [1415.5, 784.0], [1431.5, 785.0], [1446.0, 782.5], [1456.5, 783.5], [1466.5, 777.5], [1482.5, 774.0], [1493.5, 771.5], [1510.5, 767.0], [1523.0, 770.0], [1540.5, 769.0], [1555.0, 770.5], [1573.0, 777.0], [1588.5, 776.0], [1605.5, 774.0], [1620.5, 777.5], [1637.5, 776.0], [1647.0, 769.5], [1665.5, 770.0], [1683.5, 767.5], [1705.0, 764.0], [1731.5, 759.0], [1751.5, 755.5], [1769.0, 747.5], [1779.0, 745.5], [1795.0, 751.0], [1810.5, 751.5], [1833.0, 773.0]], 6: [[1384.5, 672.5], [1382.5, 682.5], [1382.5, 693.5], [1391.5, 674.0]], 5: [[1001.5, 679.5], [1017.0, 678.0], [1027.0, 687.0], [1035.0, 695.0], [1038.0, 673.0], [1039.5, 644.0], [1045.5, 628.5], [1048.5, 639.5]], 4: [[907.0, 774.5], [914.0, 767.0], [925.5, 765.0], [935.5, 769.5], [955.0, 780.0], [965.0, 784.0], [979.0, 787.0], [989.5, 785.5], [999.5, 788.0], [1010.5, 794.0], [1017.0, 802.5], [1027.0, 804.5], [1037.5, 803.0], [1050.5, 800.5], [1064.5, 795.5], [1076.5, 796.5], [1091.0, 801.0], [1106.0, 801.0], [1123.5, 802.0], [1132.5, 797.5], [1147.5, 789.5], [1159.5, 784.5], [1175.0, 783.5], [1186.0, 781.0], [1199.0, 776.0], [1215.0, 781.0], [1227.0, 782.5], [1237.5, 779.0], [1249.5, 777.5], [1260.5, 771.0], [1277.5, 776.5], [1289.5, 779.0], [1303.0, 771.0], [1317.0, 765.5], [1328.5, 762.0], [1341.0, 763.5], [1353.0, 766.5], [1367.0, 764.5], [1381.5, 763.5], [1392.0, 767.5], [1403.0, 762.5], [1425.5, 759.0], [1448.5, 760.0], [1470.5, 760.0], [1496.0, 758.5], [1516.0, 757.5], [1539.0, 752.0], [1559.5, 755.0], [1575.5, 751.5], [1594.5, 747.0], [1617.0, 740.5], [1637.0, 728.0], [1661.0, 725.0], [1673.5, 729.5], [1683.5, 730.5], [1696.5, 737.0], [1712.0, 738.5], [1724.5, 747.5], [1742.5, 754.0], [1761.5, 767.5], [1771.0, 775.0], [1781.5, 782.0], [1801.5, 793.5], [1818.5, 785.5], [1819.0, 758.5], [1806.0, 747.0], [1795.0, 749.5], [1782.5, 751.0], [1770.0, 748.5], [1747.5, 745.5], [1730.5, 747.0], [1719.5, 747.5], [1717.5, 736.0], [1689.5, 726.5], [1675.0, 727.0], [1664.5, 723.0], [1654.5, 712.5], [1643.0, 718.5], [1627.0, 720.5], [1613.0, 716.5], [1599.5, 714.5], [1492.5, 659.0], [1499.5, 681.0], [1495.5, 690.5], [1484.5, 690.5], [1475.5, 684.0], [1461.0, 687.0], [1456.5, 671.0], [1377.0, 661.5], [1377.5, 673.0]], 3: [[817.5, 694.0], [810.5, 702.5], [803.5, 712.0], [796.5, 720.5], [798.0, 731.0], [811.5, 734.0], [824.0, 735.0], [836.0, 738.0], [840.5, 748.0], [849.0, 754.5], [861.0, 764.0], [868.0, 772.0], [880.0, 770.0], [889.5, 766.5], [901.0, 774.5], [911.5, 773.0], [923.0, 774.5], [935.0, 773.0], [951.5, 769.0], [966.5, 764.0], [978.5, 762.5], [990.0, 758.0], [1000.5, 759.0], [1016.5, 748.5], [1027.0, 745.5], [1039.0, 746.0], [1050.0, 748.0], [1062.5, 744.0], [1083.5, 738.5], [1096.5, 738.0], [1110.5, 736.5], [1126.0, 733.0], [1137.0, 731.5], [1155.5, 735.0], [1173.0, 732.0], [1187.0, 727.5], [1230.0, 733.0], [1253.0, 734.0], [1268.5, 733.5], [1280.0, 729.0], [1289.5, 724.5], [1312.0, 719.5], [1331.0, 713.5], [1349.0, 708.0], [1373.0, 710.0], [1399.5, 703.0], [1416.0, 695.5], [1430.5, 690.5], [1446.0, 686.0], [1462.5, 685.0], [1484.0, 692.0], [1511.5, 686.0], [1538.0, 688.5], [1567.0, 695.5], [1597.0, 693.0], [1618.5, 696.5], [1646.0, 685.5], [1660.5, 683.0], [1686.0, 686.0], [1698.5, 686.5], [1693.0, 698.5], [1759.5, 685.5], [1789.0, 703.0], [1805.0, 709.0]], 2: [[1622.5, 671.0], [1640.5, 663.0], [1660.5, 673.5], [1691.0, 665.0], [1710.5, 659.0], [1731.5, 660.5], [1748.0, 659.5], [1763.5, 664.5], [1783.0, 675.0], [1802.5, 707.5], [1819.0, 756.5], [1813.0, 725.5], [1809.5, 716.0]], 1: [[1165.0, 786.5], [1175.5, 787.5], [1185.0, 795.0], [1200.5, 800.0], [1212.5, 797.0], [1226.0, 789.0], [1240.5, 788.0], [1255.0, 784.5], [1267.5, 781.5], [1285.0, 776.0], [1296.5, 764.5], [1308.5, 764.5], [1311.5, 775.0], [1326.0, 775.5], [1338.0, 770.5], [1354.5, 770.0], [1374.5, 767.0], [1410.0, 760.0], [1436.0, 756.0], [1465.5, 752.5], [1493.0, 749.5], [1514.0, 754.5], [1524.5, 733.5], [1555.0, 731.5], [1580.5, 734.5], [1604.5, 735.0], [1624.5, 738.0], [1644.0, 737.0], [1674.0, 736.0], [1703.5, 735.0], [1728.5, 738.0], [1745.5, 742.0], [1763.0, 729.5], [1780.0, 716.5], [1790.0, 698.0], [1805.5, 693.5], [1800.5, 729.5], [1802.0, 717.5], [1791.5, 756.0], [1789.0, 815.5], [1801.5, 844.0], [1809.0, 830.5]], 8: [[1049.5, 728.0]], 9: [[1501.0, 738.0], [1511.0, 741.0], [1521.5, 745.0], [1540.5, 739.0], [1556.5, 740.5], [1581.5, 742.5], [1603.0, 747.5], [1617.0, 743.5], [1637.5, 744.0], [1658.0, 742.5], [1678.0, 733.5], [1691.0, 730.0], [1706.5, 729.5], [1727.0, 730.0], [1738.5, 728.5], [1758.0, 728.5], [1774.5, 735.0], [1784.5, 736.0], [1795.0, 731.0], [1802.5, 739.5], [1824.5, 717.5], [1836.5, 702.5], [1851.0, 699.5]], 11: [[924.0, 713.0], [920.5, 701.0], [919.0, 689.5], [929.0, 685.5], [940.0, 688.5], [950.5, 690.5], [962.5, 697.5], [974.5, 697.0], [987.5, 696.0], [1000.0, 693.0], [1008.5, 701.5], [1020.0, 711.5], [1030.0, 711.0], [1033.5, 722.0], [1044.0, 731.0], [1058.0, 734.5], [1069.5, 736.5], [1084.5, 735.5], [1094.5, 723.5], [1103.5, 732.0], [1107.0, 744.5], [1112.5, 756.0], [1119.5, 748.0], [1133.5, 748.0], [1149.0, 758.0], [1159.5, 761.5], [1170.5, 766.0], [1189.0, 762.5], [1202.5, 761.5], [1216.5, 760.0], [1228.5, 757.5], [1243.5, 754.5], [1265.5, 753.0], [1280.0, 754.0], [1291.5, 740.5], [1304.0, 736.0], [1314.5, 729.0], [1473.5, 723.5], [1548.5, 717.0], [1572.5, 718.5], [1664.0, 714.0], [1685.0, 714.0], [1708.5, 709.5], [1723.0, 705.5], [1740.0, 693.0], [1750.5, 710.0], [1761.5, 721.5], [1771.5, 729.5], [1781.5, 736.5], [1797.5, 731.0], [1808.5, 728.5], [1828.0, 732.5]], 12: [[1587.5, 673.0], [1584.0, 683.5], [1574.0, 695.0], [1532.5, 724.0], [1518.5, 688.0], [1512.5, 677.0], [1503.0, 673.5], [1490.0, 673.5]], 13: [[1718.0, 695.5], [1707.5, 695.0], [1695.0, 697.0], [1620.5, 724.5], [1611.0, 708.0], [1607.0, 695.0], [1593.5, 695.0], [1583.0, 691.0], [1573.5, 686.0], [1565.5, 694.5], [1552.5, 694.5], [1395.5, 667.5], [1385.5, 670.5], [1375.0, 670.5], [1365.5, 675.5], [1350.5, 682.0], [1333.0, 683.0], [1323.0, 671.5], [1320.5, 661.5], [1161.0, 636.0], [1160.5, 647.0], [1101.0, 633.5]], 14: [[1338.5, 676.0], [1331.0, 668.0]], 15: [[1384.5, 669.0]], 16: [[1092.0, 713.0], [1090.5, 693.0], [1094.5, 683.5], [1099.0, 699.0], [1101.0, 709.0], [1101.5, 699.0], [1112.0, 694.0], [1123.5, 707.0], [1131.5, 715.0], [1141.0, 719.0], [1152.5, 711.0], [1163.0, 705.5], [1169.5, 697.0], [1160.5, 712.5], [1166.0, 725.0], [1182.0, 725.0], [1192.0, 722.5], [1204.5, 712.0], [1210.0, 725.0], [1215.0, 735.0]], 17: [[932.5, 615.0]], 18: [[1863.5, 746.5], [1850.5, 746.0], [1837.0, 744.5], [1826.0, 741.5], [1814.5, 742.5], [1803.0, 741.5], [1787.5, 735.5], [1776.5, 738.0], [1767.0, 728.0], [1684.5, 697.0], [1608.5, 667.0], [1621.0, 700.0], [1607.0, 708.5], [1592.0, 709.0], [1577.0, 699.0], [1567.0, 696.5], [1556.0, 697.0], [1545.0, 697.5], [1534.5, 698.0], [1521.0, 692.5], [1510.0, 685.0], [1498.0, 684.5], [1488.0, 686.0], [1429.5, 666.5], [1418.5, 670.5], [1406.5, 675.5], [1394.0, 674.0], [1386.0, 656.0], [1332.5, 656.0], [1326.0, 666.0], [1325.0, 678.0]], 19: [[761.5, 718.5], [760.5, 732.0], [761.0, 746.0], [760.5, 756.5], [768.5, 764.0], [777.0, 758.0], [785.0, 768.5], [785.5, 779.5], [786.5, 768.5], [793.0, 759.5], [790.5, 769.5], [792.0, 781.5], [796.5, 772.0], [805.0, 777.5], [815.0, 772.5], [830.0, 775.5], [841.0, 770.5], [854.0, 761.5], [865.0, 758.0], [876.5, 756.5], [890.0, 761.5], [904.5, 762.0], [917.0, 758.5], [927.5, 759.5], [938.5, 758.0], [956.0, 756.0], [970.0, 751.5], [983.5, 752.5], [995.0, 750.0], [1012.0, 744.5], [1042.5, 746.5], [1061.0, 746.5], [1085.5, 750.0], [1096.0, 748.5], [1106.0, 741.0], [1122.5, 736.0], [1136.5, 730.0], [1157.0, 727.5], [1174.0, 720.5], [1190.5, 717.0], [1218.0, 718.0], [1230.5, 718.5], [1244.0, 719.5], [1266.5, 718.0], [1288.0, 711.5], [1320.5, 711.5], [1363.0, 713.5], [1424.0, 706.5], [1454.5, 697.0], [1495.5, 690.5], [1534.0, 682.0], [1581.0, 670.5], [1609.0, 667.0], [1627.0, 655.0], [1635.0, 646.5], [1649.0, 654.5], [1681.5, 647.0], [1693.5, 645.5], [1692.0, 683.0], [1691.0, 729.5], [1696.0, 738.5]], 21: [[1220.0, 715.0], [1224.5, 691.5], [1222.0, 668.0], [1218.0, 656.0], [1217.0, 638.5]], 22: [[979.0, 619.5]], 23: [[1285.0, 659.5], [1274.5, 660.5]], 24: [[1761.0, 748.5], [1723.0, 727.0], [1708.5, 719.5]], 25: [[916.5, 666.0], [922.5, 675.0], [932.0, 679.0], [941.5, 685.5], [942.0, 697.0], [940.5, 719.0], [942.0, 734.0]], 27: [[995.0, 618.5]], 29: [[1101.0, 651.5], [1098.0, 641.0], [1091.5, 650.0], [1093.0, 636.0], [1098.0, 627.0]], 31: [[1000.5, 625.0], [999.5, 635.0], [989.0, 662.0], [976.0, 661.0], [981.0, 679.0], [989.5, 692.0], [1003.5, 702.0], [1009.0, 710.5], [1018.5, 717.5], [1029.5, 723.0], [1043.0, 726.0], [1053.0, 720.5], [1057.5, 731.5], [1066.0, 741.0], [1080.5, 744.5], [1090.5, 740.5], [1101.5, 743.5], [1115.0, 750.5], [1127.5, 758.0], [1137.5, 762.0], [1147.5, 758.0], [1160.5, 763.5], [1175.0, 770.0], [1180.5, 781.5], [1193.0, 784.5], [1203.0, 784.0], [1211.5, 777.0], [1226.5, 779.0], [1236.5, 778.0], [1253.0, 774.5], [1264.5, 776.0], [1276.5, 786.5], [1291.5, 788.5], [1304.0, 787.0], [1320.5, 787.0], [1336.5, 778.0], [1351.5, 768.0], [1365.5, 765.5], [1380.0, 771.0], [1395.0, 782.0], [1410.0, 782.5], [1420.5, 781.0], [1437.5, 774.0], [1462.0, 765.0], [1481.5, 763.0], [1497.5, 763.0], [1510.5, 761.5], [1524.0, 760.5], [1541.0, 760.0], [1559.0, 763.0], [1577.5, 764.0], [1601.0, 766.0], [1621.0, 768.5], [1642.5, 765.0], [1667.5, 763.0], [1690.5, 756.0], [1713.5, 745.0], [1728.5, 750.0], [1741.5, 743.5], [1753.5, 734.0], [1762.0, 724.5], [1780.0, 735.5], [1804.0, 740.5], [1818.0, 743.0], [1831.5, 754.5]], 30: [[1205.0, 711.5], [1195.0, 716.0], [1209.5, 719.0], [1220.0, 719.0], [1230.0, 732.0], [1244.0, 728.0], [1256.5, 730.0], [1264.0, 740.0], [1276.5, 747.5], [1283.5, 763.5], [1297.0, 767.0], [1306.5, 754.5]], 32: [[753.5, 615.0], [762.0, 621.5], [770.0, 631.0], [758.0, 624.5], [769.5, 630.5], [772.5, 640.5], [760.5, 629.5]], 33: [[812.0, 636.5], [811.0, 650.5], [809.0, 661.5], [812.0, 639.0], [811.5, 649.0], [809.5, 660.0], [813.5, 644.5], [813.0, 656.0], [816.5, 665.5], [827.5, 667.5], [833.5, 676.0], [847.5, 673.0], [857.0, 679.5]], 26: [[868.5, 636.0], [874.0, 627.5], [874.0, 638.5]], 34: [[923.5, 627.0], [927.5, 617.0], [923.5, 627.0]], 36: [[1158.0, 650.5], [1151.5, 658.5], [1164.5, 662.5], [1165.0, 652.0]], 35: [[978.5, 626.0], [982.0, 637.0], [980.5, 647.5], [976.5, 658.0], [967.5, 663.5], [958.0, 673.0], [969.5, 677.0], [978.0, 682.5], [988.5, 686.5], [995.5, 694.5], [1005.0, 698.0], [1016.0, 704.0], [1026.5, 701.0], [1041.5, 702.5], [1053.0, 698.5], [1062.0, 703.0]], 37: [[1219.0, 633.0], [1230.0, 633.5]], 38: [[1552.5, 737.5], [1570.5, 730.0], [1591.5, 730.0], [1604.5, 734.0], [1616.0, 738.5], [1626.0, 744.0], [1641.5, 735.0], [1667.0, 728.0], [1693.5, 726.0], [1716.5, 724.0], [1742.0, 716.0], [1769.5, 712.5], [1782.0, 710.0], [1792.5, 701.5], [1804.0, 712.0], [1821.5, 712.0]], 41: [[1546.0, 661.0], [1535.0, 660.5], [1519.5, 662.0], [1508.0, 666.5], [1498.0, 665.5], [1487.5, 661.5], [1462.5, 655.0], [1450.5, 681.5], [1436.5, 688.5], [1408.5, 672.0], [1392.0, 665.0], [1379.5, 655.0], [1371.0, 664.0], [1384.5, 662.5], [1392.5, 671.5]], 42: [[1275.5, 667.0], [1278.0, 678.0], [1277.5, 688.0], [1272.5, 699.0], [1268.5, 687.5], [1263.0, 679.0], [1211.5, 656.0], [1211.0, 642.5], [1212.0, 632.5], [1212.5, 660.5], [1221.5, 643.0], [1214.5, 659.0], [1211.5, 643.5], [1212.5, 628.5], [1206.0, 650.5], [1211.5, 659.0], [1225.0, 659.0]], 44: [[1532.0, 671.0], [1501.0, 666.0], [1490.5, 673.5], [1501.0, 677.0], [1488.5, 677.0], [1478.5, 675.0], [1452.5, 676.0], [1444.0, 670.5], [1434.0, 671.5], [1324.5, 655.0], [1313.0, 661.0]], 39: [[1833.0, 737.5], [1837.5, 757.5], [1826.0, 761.5], [1802.5, 741.5], [1793.5, 720.5], [1790.5, 708.5], [1774.0, 700.5], [1762.0, 701.5], [1748.0, 695.5], [1735.0, 686.0], [1720.5, 686.0], [1706.5, 688.5], [1686.0, 689.0], [1673.5, 690.5], [1663.5, 687.0], [1650.5, 685.5], [1630.5, 683.5], [1619.5, 680.0], [1604.0, 678.0], [1591.0, 681.5], [1575.5, 687.5], [1565.5, 684.5], [1555.5, 678.0], [1549.5, 666.5], [1536.5, 666.5], [1519.0, 686.0], [1511.5, 700.5], [1482.5, 692.5], [1484.0, 671.5], [1477.0, 661.0], [1464.0, 667.5], [1451.0, 668.0], [1441.5, 672.5], [1430.5, 670.0], [1421.0, 666.5], [1408.0, 668.0], [1396.0, 664.5]], 45: [[1099.5, 634.5]], 47: [[1169.5, 662.0], [1159.0, 663.0], [1154.5, 647.0]], 48: [[1261.5, 632.5], [1264.5, 659.5], [1259.0, 641.5], [1274.5, 653.5], [1280.0, 664.0], [1269.0, 660.5], [1258.5, 659.0]], 49: [[929.0, 622.5], [931.5, 634.0]], 50: [[979.5, 616.5]], 51: [[809.5, 658.0]] };

let newData = [];

Object.values(data).map(item => item.map((i) => {
  newData = [...newData, { x: Math.ceil(i[0]), y: Math.ceil(i[1]), value: 0 }];
  return [];
}));

console.log('newData :>> ', newData);


console.log('data :>> ', data);

Vue.config.productionTip = false;
Vue.use(Vueheatmap, {
  heatmapPreload: newData.slice(0, 5),
});


/* heatmapPreload: [{ x: 155, y: 468, value: 120 }, { x: 283, y: 702, value: 120 }, { x: 226, y: 710, value: 100 }, 
  { x: 120, y: 320, value: 110 }, { x: 160, y: 320, value: 110 }, { x: 200, y: 320, value: 110 }, { x: 520, y: 426, value: 110 }, { x: 480, y: 426, value: 110 }],
   */
stream
  .throttleTime(1000)
  .subscribe(console.log);

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
