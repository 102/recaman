import { test } from "node:test";
import assert from "node:assert";
import { recaman } from "./index.js";

[
  0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42,
  63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78,
  38, 79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29,
  88, 28, 89, 27, 90, 26, 91, 157, 224, 156, 225, 155, 226, 154, 227, 153, 228,
  152, 75, 153, 74, 154, 73, 155, 72, 156, 71, 157, 70, 158, 69, 159, 68, 160,
  67, 161, 66, 162, 65, 163, 64, 164, 265, 367, 264, 368, 263, 369, 262, 370,
  261, 151, 40, 152, 265, 379, 494, 378, 495, 377, 258, 138, 259, 137, 260, 136,
  261, 135, 262, 134, 5, 135, 4, 136, 269, 403, 268, 132, 269, 131, 270, 130,
  271, 129, 272, 128, 273, 127, 274, 126, 275, 125, 276, 124, 277, 123, 278,
  122, 279, 121, 280, 120, 281, 119, 282, 118, 283, 117, 284, 116, 285, 115,
  286, 458, 631, 457, 632, 456, 633, 455, 634, 454, 635, 453, 636, 452, 267,
  453, 266, 454, 643, 833, 642, 450, 257, 451, 256, 60, 257, 59, 258, 58, 259,
  57, 260, 56, 261, 55, 262, 54, 263, 53, 264, 52, 265, 51, 266, 50, 267, 49,
  268, 48, 269, 47, 270, 494, 719, 493, 720, 492, 721, 491, 722, 490, 723, 489,
  254, 490, 253, 491, 252, 492, 251, 493, 250, 494, 249, 495, 248, 496, 247,
  497, 246, 498, 245, 499, 244, 500, 243, 501, 242, 502, 241, 503, 240, 504,
  239, 505, 238, 506, 237, 507, 236, 508, 235, 509, 234, 510, 233, 511, 232,
  512, 231, 513, 230, 514, 229, 515, 802, 1090, 801, 1091, 800, 1092, 799, 1093,
  798, 1094, 797, 1095, 796, 1096, 795, 1097, 794, 1098, 793, 487, 180, 488,
  179, 489, 178, 490, 177, 491, 176, 492, 175, 493, 174, 494, 173, 495, 172,
  496, 171, 497, 170, 498, 169, 499, 168, 500, 167, 501, 166, 502, 165, 503,
  842, 1182, 841, 1183, 840, 1184, 839, 1185, 838, 1186, 837, 1187, 836, 484,
  837, 483, 838, 482, 839, 481, 840, 480, 841, 479, 842, 478, 843, 477, 110,
  478, 109, 479, 108, 480, 107, 481, 106, 482, 105, 483, 104, 484, 103, 485,
  102, 486, 101, 487, 100, 488, 99, 489, 98, 490, 97, 491, 96, 492, 95, 493, 94,
  494, 93, 495, 92, 496, 901, 1307, 900, 1308, 899, 1309, 898, 1310, 897, 1311,
  896, 1312, 895, 1313, 894, 474, 895, 473, 896, 472, 897, 471, 898, 470, 899,
  469, 900, 468, 901, 467, 902, 466, 903, 465, 904, 464, 905, 463, 906, 462,
  907, 461, 908, 460, 909, 459, 910, 1362, 1815, 1361, 1816, 1360, 1817, 1359,
  1818, 1358, 1819, 1357, 1820, 1356, 891, 425, 892, 424, 893, 423, 894, 422,
  895, 421, 896, 420, 897, 419, 898, 418, 899, 417, 900, 416, 901, 415, 902,
  414, 903, 413, 904, 412, 905, 411, 906, 410, 907, 409, 908, 408, 909, 407,
  910, 406, 911, 405, 912, 404, 913, 1423, 1934, 1422, 1935, 1421, 1936, 1420,
  1937, 1419, 1938, 1418, 1939, 1417, 1940, 1416, 1941, 1415, 888, 360, 889,
  359, 890, 358, 891, 357, 892, 356, 893, 355, 894, 354, 895, 353, 896, 352,
  897, 351, 898, 350, 899, 349, 900, 348, 901, 347, 902, 346, 903, 345, 904,
  344, 905, 343, 906, 342, 907, 341, 908, 340, 909, 339, 910, 338, 911, 337,
  912, 336, 913, 335, 914, 334, 915, 333, 916, 332, 917, 331, 918, 330, 919,
  329, 920, 328, 921, 327, 922, 326, 923, 325, 924, 324, 925, 323, 926, 322,
  927, 321, 928, 320, 929, 319, 930, 318, 931, 317, 932, 316, 933, 315, 934,
  314, 935, 313, 936, 312, 937, 311, 938, 310, 939, 309, 940, 308, 941, 307,
  942, 306, 943, 305, 944, 304, 945, 303, 946, 302, 947, 301, 948, 300, 949,
  299, 950, 298, 951, 297, 952, 296, 953, 295, 954, 294, 955, 293, 956, 292,
  957, 291, 958, 290, 959, 289, 960, 288, 961, 287, 962, 1638, 2315, 1637, 2316,
  1636, 2317, 1635, 2318, 1634, 2319, 1633, 2320, 1632, 2321, 1631, 2322, 1630,
  2323, 1629, 2324, 1628, 2325, 1627, 2326, 1626, 2327, 1625, 2328, 1624, 2329,
  1623, 2330, 1622, 2331, 1621, 2332, 1620, 2333, 1619, 2334, 1618, 2335, 1617,
  2336, 1616, 2337, 1615, 2338, 1614, 2339, 1613, 886, 1614, 885, 1615, 884,
  1616, 883, 149, 884, 148, 885, 147, 886, 146, 887, 145, 888, 144, 889, 143,
  890, 142, 891, 141, 892, 140, 893, 139, 894, 1650, 2407, 1649, 2408, 1648,
  2409, 1647, 2410, 1646, 881, 1647, 880, 112, 881, 111, 882, 1654, 2427, 1653,
  878, 1654, 877, 1655, 876, 1656, 875, 1657, 874, 1658, 873, 1659, 872, 1660,
  871, 1661, 870, 1662, 869, 1663, 868, 1664, 867, 1665, 866, 1666, 865, 1667,
  864, 1668, 863, 1669, 862, 1670, 861, 1671, 860, 1672, 859, 1673, 858, 1674,
  857, 1675, 856, 1676, 855, 1677, 854, 1678, 853, 1679, 852, 1680, 851, 1681,
  850, 1682, 849, 1683, 848, 1684, 847, 1685, 846, 1686, 845, 1687, 844, 1688,
  2533, 3379, 2532, 3380, 2531, 3381, 2530, 3382, 2529, 3383, 2528, 3384, 2527,
  3385, 2526, 3386, 2525, 3387, 2524, 3388, 2523, 3389, 2522, 3390, 2521, 1651,
  780, 1652, 779, 1653, 778, 1654, 777, 1655, 776, 1656, 775, 1657, 774, 1658,
  773, 1659, 772, 1660, 771, 1661, 770, 1662, 769, 1663, 768, 1664, 767, 1665,
  766, 1666, 765, 1667, 764, 1668, 763, 1669, 762, 1670, 761, 1671, 760, 1672,
  759, 1673, 758, 1674, 757, 1675, 756, 1676, 755, 1677, 754, 1678, 753, 1679,
  752, 1680, 751, 1681, 750, 1682, 749, 1683, 748, 1684, 747, 1685, 746, 1686,
  745, 1687, 744, 1688, 743, 1689, 742, 1690, 741, 1691, 740, 1692, 739, 1693,
  738, 1694, 737, 1695, 736, 1696, 735, 1697, 734, 1698, 733, 1699, 732, 1700,
  731, 1701, 730, 1702, 729, 1703, 728, 1704, 727, 1705, 726, 1706, 725, 1707,
  724, 1708, 2693, 3679, 2692, 3680, 2691, 3681, 2690, 3682, 2689, 3683, 2688,
  3684, 2687, 3685, 2686, 3686, 2685, 3687, 2684, 3688, 2683, 3689, 2682, 3690,
  2681, 3691, 2680, 3692, 2679, 3693, 2678, 3694, 2677, 3695, 2676, 3696, 2675,
  3697, 2674, 3698, 2673, 3699, 2672, 1644, 615, 1645, 614, 1646, 613, 1647,
  612, 1648, 611, 1649, 610, 1650, 609, 1651, 608, 1652, 607, 1653, 606, 1654,
  605, 1655, 604, 1656, 603, 1657, 602, 1658, 601, 1659, 600, 1660, 599, 1661,
  598, 1662, 597, 1663, 596, 1664, 595, 1665, 594, 1666, 593, 1667, 592, 1668,
  591, 1669, 590, 1670, 589, 1671, 588, 1672, 587, 1673, 586, 1674, 585, 1675,
  584, 1676, 583, 1677, 582, 1678, 581, 1679, 580, 1680, 579, 1681, 578, 1682,
  577, 1683, 576, 1684, 575, 1685, 574, 1686, 573, 1687, 572, 1688, 571, 1689,
  570, 1690, 569, 1691, 568, 1692, 567, 1693, 566, 1694, 565, 1695, 564, 1696,
  563, 1697, 562, 1698, 561, 1699, 560, 1700, 559, 1701, 558, 1702, 557, 1703,
  556, 1704, 555, 1705, 554, 1706, 553, 1707, 552, 1708, 551, 1709, 550, 1710,
  549, 1711, 548, 1712, 547, 1713, 546, 1714, 545, 1715, 544, 1716, 543, 1717,
  542, 1718, 541, 1719, 540, 1720, 539, 1721, 538, 1722, 537, 1723, 536, 1724,
  535, 1725, 534, 1726, 533, 1727, 532, 1728, 531, 1729, 530, 1730, 529, 1731,
  528, 1732, 527, 1733, 526, 1734, 525, 1735, 524, 1736, 523, 1737, 522, 1738,
  521, 1739, 520, 1740, 519, 1741, 518, 1742, 517, 1743, 516, 1744, 2973, 4203,
  2972, 4204, 2971, 4205, 2970, 4206, 2969, 4207, 2968, 4208, 2967, 4209, 2966,
  4210, 2965, 4211, 2964, 4212, 2963, 4213, 2962, 4214, 2961, 4215, 2960, 4216,
  2959, 4217, 2958, 4218, 2957, 4219, 2956, 4220, 2955, 4221, 2954, 4222, 2953,
  4223, 2952, 4224, 2951, 4225, 2950, 4226, 2949, 4227, 2948, 4228, 2947, 4229,
  2946, 4230, 2945, 4231, 2944, 4232, 2943, 4233, 2942, 4234, 2941, 4235, 2940,
  4236, 2939, 1641, 2940, 1640, 2941, 1639, 2942, 4246, 5551, 4245, 2938, 4246,
  2937, 4247, 2936, 4248, 2935, 4249, 2934, 4250, 2933, 4251, 2932, 1612, 2933,
  1611, 2934, 1610, 2935, 1609, 2936, 1608, 2937, 1607, 2938, 1606, 2939, 1605,
  2940, 1604, 2941, 1603, 2942, 1602, 2943, 1601, 2944, 1600, 255, 1601, 2948,
  4296, 5645, 4295, 5646, 4294, 5647, 4293, 5648, 4292, 5649, 4291, 5650, 4290,
  2929, 1567, 204, 1568, 203, 1569, 202, 1570, 201, 1571, 200, 1572, 199, 1573,
  198, 1574, 197, 1575, 196, 1576, 195, 1577, 194, 1578, 193, 1579, 192, 1580,
  191, 1581, 190, 1582, 189, 1583, 188, 1584, 187, 1585, 186, 1586, 185, 1587,
  184, 1588, 183, 1589, 182, 1590, 181, 1591, 3002, 4414, 3001, 4415, 3000,
  4416, 2999, 4417, 2998, 4418, 2997, 4419, 2996, 4420, 2995, 4421, 2994, 1566,
  2995, 1565, 2996, 1564, 2997, 1563, 2998, 1562, 2999, 1561, 3000, 1560, 3001,
  1559, 3002, 1558, 3003, 1557, 3004, 1556, 3005, 1555, 3006, 1554, 3007, 1553,
  3008, 1552, 3009, 1551, 3010, 1550, 3011, 1549, 3012, 1548, 3013, 1547, 3014,
  1546, 3015, 1545, 3016, 1544, 3017, 1543, 3018, 1542, 3019, 1541, 3020, 1540,
  3021, 1539, 3022, 1538, 3023, 1537, 3024, 1536, 3025, 1535, 3026, 1534, 3027,
  1533, 3028, 1532, 3029, 1531, 3030, 1530, 3031, 1529, 3032, 1528, 3033, 1527,
  3034, 1526, 3035, 1525, 3036, 1524, 3037, 1523, 3038, 1522, 3039, 1521, 3040,
  1520, 3041, 1519, 3042, 1518, 3043, 1517, 3044, 1516, 3045, 1515, 3046, 1514,
  3047, 1513, 3048, 1512, 3049, 1511, 3050, 1510, 3051, 1509, 3052, 1508, 3053,
  1507, 3054, 1506, 3055, 1505, 3056, 1504, 3057, 1503, 3058, 1502, 3059, 1501,
  3060, 1500, 3061, 1499, 3062, 1498, 3063, 1497, 3064, 1496, 3065, 1495, 3066,
  1494, 3067, 1493, 3068, 1492, 3069, 1491, 3070, 1490, 3071, 1489, 3072, 1488,
  3073, 1487, 3074, 1486, 3075, 1485, 3076, 1484, 3077, 1483, 3078, 1482, 3079,
  1481, 3080, 1480, 3081, 1479, 3082, 1478, 3083, 1477, 3084, 1476, 3085, 1475,
  3086, 1474, 3087, 1473, 3088, 1472, 3089, 1471, 3090, 1470, 3091, 1469, 3092,
  1468, 3093, 1467, 3094, 1466, 3095, 1465, 3096, 1464, 3097, 1463, 3098, 1462,
  3099, 1461, 3100, 1460, 3101, 1459, 3102, 1458, 3103, 1457, 3104, 1456, 3105,
  1455, 3106, 1454, 3107, 1453, 3108, 1452, 3109, 1451, 3110, 1450, 3111, 1449,
  3112, 1448, 3113, 1447, 3114, 1446, 3115, 1445, 3116, 1444, 3117, 1443, 3118,
  1442, 3119, 1441, 3120, 1440, 3121, 1439, 3122, 1438, 3123, 1437, 3124, 1436,
  3125, 1435, 3126, 1434, 3127, 1433, 3128, 1432, 3129, 1431, 3130, 1430, 3131,
  1429, 3132, 1428, 3133, 1427, 3134, 1426, 3135, 1425, 3136, 1424, 3137, 4851,
  6566, 4850, 6567, 4849, 6568, 4848, 6569, 4847, 6570, 4846, 6571, 4845, 6572,
  4844, 6573, 4843, 6574, 4842, 6575, 4841, 6576, 4840, 6577, 4839, 6578, 4838,
  6579, 4837, 6580, 4836, 6581, 4835, 6582, 4834, 6583, 4833, 6584, 4832, 6585,
  4831, 6586, 4830, 6587, 4829, 6588, 4828, 6589, 4827, 6590, 4826, 6591, 4825,
  6592, 4824, 6593, 4823, 6594, 4822, 6595, 4821, 6596, 4820, 6597, 4819, 6598,
  4818, 6599, 4817, 6600, 4816, 6601, 4815, 6602, 4814, 6603, 4813, 6604, 4812,
  6605, 4811, 6606, 4810, 6607, 4809, 6608, 4808, 6609, 4807, 6610, 4806, 6611,
  4805, 6612, 4804, 6613, 4803, 2992, 1180, 2993, 1179, 2994, 1178, 2995, 1177,
  2996, 1176, 2997, 1175, 2998, 1174, 2999, 1173, 3000, 1172, 3001, 1171, 3002,
  1170, 3003, 1169, 3004, 1168, 3005, 1167, 3006, 1166, 3007, 1165, 3008, 1164,
  3009, 1163, 3010, 1162, 3011, 1161, 3012, 1160, 3013, 1159, 3014, 1158, 3015,
  1157, 3016, 1156, 3017, 1155, 3018, 1154, 3019, 1153, 3020, 1152, 3021, 1151,
  3022, 1150, 3023, 1149, 3024, 1148, 3025, 1147, 3026, 1146, 3027, 1145, 3028,
  1144, 3029, 1143, 3030, 1142, 3031, 1141, 3032, 1140, 3033, 1139, 3034, 1138,
  3035, 1137, 3036, 1136, 3037, 1135, 3038, 1134, 3039, 1133, 3040, 1132, 3041,
  1131, 3042, 1130, 3043, 1129, 3044, 1128, 3045, 1127, 3046, 1126, 3047, 1125,
  3048, 1124, 3049, 1123, 3050, 1122, 3051, 1121, 3052, 1120, 3053, 1119, 3054,
  1118, 3055, 1117, 3056, 1116, 3057, 1115, 3058, 1114, 3059, 1113, 3060, 1112,
  3061, 1111, 3062, 1110, 3063, 1109, 3064, 1108, 3065, 1107, 3066, 1106, 3067,
  1105, 3068, 1104, 3069, 1103, 3070, 1102, 3071, 1101, 3072, 1100, 3073, 1099,
  3074, 5050, 7027, 5049, 7028, 5048, 7029, 5047, 7030, 5046, 7031, 5045, 7032,
  5044, 7033, 5043, 7034, 5042, 7035, 5041, 7036, 5040, 7037, 5039, 7038, 5038,
  7039, 5037, 7040, 5036, 7041, 5035, 7042, 5034, 7043, 5033, 7044, 5032, 7045,
  5031, 7046, 5030, 7047, 5029, 7048, 5028, 7049, 5027, 7050, 5026, 7051, 5025,
  7052, 5024, 7053, 5023, 7054, 5022, 2989, 5023, 2988, 5024, 2987, 5025, 2986,
  5026, 2985, 5027, 2984, 5028, 2983, 5029, 2982, 5030, 2981, 5031, 2980, 5032,
  2979, 5033, 2978, 5034, 2977, 5035, 2976, 5036, 2975, 5037, 2974, 5038, 7103,
  9169, 7102, 9170, 7101, 9171, 7100, 9172, 7099, 9173, 7098, 9174, 7097, 5019,
  7098, 5018, 7099, 5017, 7100, 5016, 2931, 5017, 2930, 5018, 7107, 9197, 7106,
  5014, 2921, 827, 2922, 826, 2923, 825, 2924, 824, 2925, 823, 2926, 822, 2927,
  821, 2928, 820, 2929, 819, 2930, 818, 2931, 817, 2932, 816, 2933, 815, 2934,
  814, 2935, 813, 2936, 812, 2937, 811, 2938, 810, 2939, 809, 2940, 808, 2941,
  807, 2942, 806, 2943, 805, 2944, 804, 2945, 803, 2946, 5090, 7235, 5089, 7236,
  5088, 7237, 5087, 7238, 5086, 7239, 5085, 7240, 5084, 7241, 5083, 7242, 5082,
  7243, 5081, 2918, 5082, 2917, 5083, 2916, 5084, 2915, 5085, 2914, 5086, 2913,
  5087, 2912, 5088, 2911, 5089, 2910, 5090, 2909, 5091, 2908, 5092, 2907, 5093,
  2906, 718, 2907, 717, 2908, 716, 2909, 715, 2910, 714, 2911, 713, 2912, 712,
  2913, 711, 2914, 710, 2915, 709, 2916, 708, 2917, 707, 2918, 706, 2919, 705,
  2920, 704, 2921, 703, 2922, 702, 2923, 701, 2924, 700, 2925, 699, 2926, 698,
  2927, 697, 2928, 696, 2929, 695, 2930, 694, 2931, 693, 2932, 692, 2933, 691,
  2934, 690, 2935, 689, 2936, 688, 2937, 687, 2938, 686, 2939, 685, 2940, 684,
  2941, 683, 2942, 682, 2943, 681, 2944, 680, 2945, 679, 2946, 678, 2947, 677,
  2948, 676, 2949, 675, 2950, 674, 2951, 673, 2952, 672, 2953, 671, 2954, 670,
  2955, 669, 2956, 668, 2957, 667, 2958, 666, 2959, 665, 2960, 664, 2961, 663,
  2962, 662, 2963, 661, 2964, 660, 2965, 659, 2966, 658, 2967, 657, 2968, 656,
  2969, 655, 2970, 654, 2971, 653, 2972, 652, 2973, 651, 2974, 650, 2975, 649,
  2976, 648, 2977, 647, 2978, 646, 2979, 645, 2980, 644, 2981, 5319, 7658, 5318,
  7659, 5317, 7660, 5316, 7661, 5315, 7662, 5314, 7663, 5313, 7664, 5312, 7665,
  5311, 7666, 5310, 7667, 5309, 7668, 5308, 7669, 5307, 7670, 5306, 7671, 5305,
  7672, 5304, 7673, 5303, 7674, 5302, 7675, 5301, 7676, 5300, 7677, 5299, 7678,
  5298, 7679, 5297, 7680, 5296, 7681, 5295, 7682, 5294, 2905, 5295, 2904, 5296,
  2903, 5297, 2902, 5298, 2901, 5299, 2900, 5300, 2899, 5301, 2898, 5302, 2897,
  5303, 2896, 5304, 2895, 5305, 2894, 5306, 2893, 5307, 2892, 476, 2893, 475,
  2894, 5314, 7735, 10157, 7734, 10158, 7733, 10159, 7732, 10160, 7731, 10161,
  7730, 10162, 7729, 10163, 7728, 5292, 2855, 5293, 2854, 5294, 2853, 5295,
  2852, 5296, 2851, 5297, 2850, 402, 2851, 401, 2852, 400, 2853, 399, 2854, 398,
  2855, 397, 2856, 396, 2857, 395, 2858, 394, 2859, 393, 2860, 392, 2861, 391,
  2862, 390, 2863, 389, 2864, 388, 2865, 387, 2866, 386, 2867, 385, 2868, 384,
  2869, 383, 2870, 382, 2871, 381, 2872, 380, 2873, 5367, 7862, 5366, 7863,
  5365, 7864, 5364, 7865, 5363, 7866, 5362, 7867, 5361, 7868, 5360, 7869, 5359,
  2848, 5360, 2847, 5361, 2846, 5362, 2845, 5363, 2844, 5364, 2843, 5365, 2842,
  5366, 2841, 5367, 2840, 5368, 2839, 5369, 2838, 5370, 2837, 5371, 2836, 5372,
  2835, 5373, 2834, 5374, 2833, 5375, 2832, 5376, 2831, 5377, 2830, 5378, 2829,
  5379, 2828, 5380, 2827, 5381, 2826, 5382, 2825, 5383, 2824, 5384, 2823, 5385,
  2822, 5386, 2821, 5387, 2820, 5388, 2819, 5389, 2818, 5390, 2817, 5391, 2816,
  5392, 2815, 5393, 2814, 5394, 2813, 5395, 2812, 5396, 2811, 5397, 2810, 222,
  2811, 221, 2812, 220, 2813, 219, 2814, 218, 2815, 217, 2816, 216, 2817, 215,
  2818, 214, 2819, 213, 2820, 212, 2821, 211, 2822, 210, 2823, 209, 2824, 208,
  2825, 207, 2826, 206, 2827, 205, 2828, 5452, 8077, 5451, 8078, 5450, 8079,
  5449, 8080, 5448, 8081, 5447, 8082, 5446, 2809, 5447, 2808, 5448, 2807, 5449,
  2806, 5450, 2805, 5451, 2804, 5452, 2803, 5453, 2802, 150, 2803, 5457, 8112,
  5456, 2799, 5457, 2798, 5458, 2797, 5459, 2796, 5460, 2795, 5461, 2794, 5462,
  2793, 5463, 2792, 5464, 2791, 5465, 2790, 5466, 2789, 5467, 2788, 5468, 2787,
  5469, 2786, 5470, 2785, 5471, 2784, 5472, 2783, 5473, 2782, 5474, 2781, 5475,
  2780, 5476, 2779, 5477, 2778, 5478, 2777, 5479, 2776, 5480, 2775, 5481, 2774,
  5482, 2773, 5483, 2772, 5484, 2771, 5485, 2770, 5486, 2769, 5487, 2768, 5488,
  2767, 5489, 2766, 5490, 2765, 5491, 2764, 5492, 2763, 5493, 2762, 5494, 2761,
  5495, 2760, 5496, 2759, 5497, 2758, 5498, 2757, 5499, 2756, 5500, 2755, 5501,
  2754, 5502, 2753, 5503, 2752, 5504, 2751, 5505, 2750, 5506, 2749, 5507, 2748,
  5508, 2747, 5509, 2746, 5510, 2745, 5511, 2744, 5512, 2743, 5513, 2742, 5514,
  2741, 5515, 2740, 5516, 2739, 5517, 2738, 5518, 2737, 5519, 2736, 5520, 2735,
  5521, 2734, 5522, 2733, 5523, 2732, 5524, 2731, 5525, 2730, 5526, 2729, 5527,
  2728, 5528, 2727, 5529, 2726, 5530, 2725, 5531, 2724, 5532, 2723, 5533, 2722,
  5534, 2721, 5535, 2720, 5536, 2719, 5537, 2718, 5538, 2717, 5539, 2716, 5540,
  2715, 5541, 2714, 5542, 2713, 5543, 2712, 5544, 2711, 5545, 2710, 5546, 2709,
  5547, 2708, 5548, 2707, 5549, 2706, 5550, 2705, 5551, 2704, 5552, 2703, 5553,
  2702, 5554, 2701, 5555, 2700, 5556, 2699, 5557, 2698, 5558, 2697, 5559, 2696,
  5560, 2695, 5561, 2694, 5562, 8431, 11301, 8430, 11302, 8429, 11303, 8428,
  11304, 8427, 11305, 8426, 11306, 8425, 11307, 8424, 11308, 8423, 11309, 8422,
  11310, 8421, 11311, 8420, 11312, 8419, 11313, 8418, 11314, 8417, 11315, 8416,
  11316, 8415, 11317, 8414, 11318, 8413, 11319, 8412, 11320, 8411, 11321, 8410,
  11322, 8409, 11323, 8408, 11324, 8407, 11325, 8406, 11326, 8405, 11327, 8404,
  11328, 8403, 11329, 8402, 11330, 8401, 11331, 8400, 11332, 8399, 11333, 8398,
  11334, 8397, 11335, 8396, 11336, 8395, 11337, 8394, 11338, 8393, 11339, 8392,
  5444, 2495, 5445, 2494, 5446, 2493, 5447, 2492, 5448, 2491, 5449, 2490, 5450,
  2489, 5451, 2488, 5452, 2487, 5453, 2486, 5454, 2485, 5455, 2484, 5456, 2483,
  5457, 2482, 5458, 2481, 5459, 2480, 5460, 2479, 5461, 2478, 5462, 2477, 5463,
  2476, 5464, 2475, 5465, 2474, 5466, 2473, 5467, 2472, 5468, 2471, 5469, 2470,
  5470, 2469, 5471, 2468, 5472, 2467, 5473, 2466, 5474, 2465, 5475, 2464, 5476,
  2463, 5477, 2462, 5478, 2461, 5479, 2460, 5480, 2459, 5481, 2458, 5482, 2457,
  5483, 2456, 5484, 2455, 5485, 2454, 5486, 2453, 5487, 2452, 5488, 2451, 5489,
  2450, 5490, 2449, 5491, 2448, 5492, 2447, 5493, 2446, 5494, 2445, 5495, 2444,
  5496, 2443, 5497, 2442, 5498, 2441, 5499, 2440, 5500, 2439, 5501, 2438, 5502,
  2437, 5503, 2436, 5504, 2435, 5505, 2434, 5506, 2433, 5507, 2432, 5508, 2431,
  5509, 2430, 5510, 2429, 5511, 2428, 5512, 8597, 11683, 8596, 11684, 8595,
  11685, 8594, 11686, 8593, 11687, 8592, 11688, 8591, 11689, 8590, 11690, 8589,
  11691, 8588, 11692, 8587, 11693, 8586, 11694, 8585, 11695, 8584, 11696, 8583,
  11697, 8582, 11698, 8581, 11699, 8580, 11700, 8579, 11701, 8578, 11702, 8577,
  11703, 8576, 11704, 8575, 11705, 8574, 5442, 2309, 5443, 2308, 5444, 2307,
  5445, 2306, 5446, 2305, 5447, 2304, 5448, 2303, 5449, 2302, 5450, 2301, 5451,
  2300, 5452, 2299, 5453, 2298, 5454, 2297, 5455, 2296, 5456, 2295, 5457, 2294,
  5458, 2293, 5459, 2292, 5460, 2291, 5461, 2290, 5462, 2289, 5463, 2288, 5464,
  2287, 5465, 2286, 5466, 2285, 5467, 2284, 5468, 2283, 5469, 2282, 5470, 2281,
  5471, 2280, 5472, 2279, 5473, 2278, 5474, 2277, 5475, 2276, 5476, 2275, 5477,
  2274, 5478, 2273, 5479, 2272, 5480, 2271, 5481, 2270, 5482, 2269, 5483, 2268,
  5484, 2267, 5485, 2266, 5486, 2265, 5487, 2264, 5488, 2263, 5489, 2262, 5490,
  2261, 5491, 2260, 5492, 2259, 5493, 2258, 5494, 2257, 5495, 2256, 5496, 2255,
  5497, 2254, 5498, 2253, 5499, 2252, 5500, 2251, 5501, 2250, 5502, 2249, 5503,
  2248, 5504, 2247, 5505, 2246, 5506, 2245, 5507, 2244, 5508, 2243, 5509, 2242,
  5510, 2241, 5511, 2240, 5512, 2239, 5513, 2238, 5514, 2237, 5515, 2236, 5516,
  2235, 5517, 2234, 5518, 2233, 5519, 2232, 5520, 2231, 5521, 2230, 5522, 2229,
  5523, 2228, 5524, 2227, 5525, 2226, 5526, 2225, 5527, 2224, 5528, 2223, 5529,
  2222, 5530, 2221, 5531, 2220, 5532, 2219, 5533, 2218, 5534, 2217, 5535, 2216,
  5536, 2215, 5537, 2214, 5538, 2213, 5539, 2212, 5540, 2211, 5541, 2210, 5542,
  2209, 5543, 2208, 5544, 2207, 5545, 2206, 5546, 2205, 5547, 2204, 5548, 2203,
  5549, 2202, 5550, 2201, 5551, 2200, 5552, 2199, 5553, 2198, 5554, 2197, 5555,
  2196, 5556, 2195, 5557, 2194, 5558, 2193, 5559, 2192, 5560, 2191, 5561, 2190,
  5562, 2189, 5563, 2188, 5564, 2187, 5565, 2186, 5566, 2185, 5567, 2184, 5568,
  2183, 5569, 2182, 5570, 2181, 5571, 2180, 5572, 2179, 5573, 2178, 5574, 2177,
  5575, 2176, 5576, 2175, 5577, 2174, 5578, 2173, 5579, 2172, 5580, 2171, 5581,
  2170, 5582, 2169, 5583, 2168, 5584, 2167, 5585, 2166, 5586, 2165, 5587, 2164,
  5588, 2163, 5589, 2162, 5590, 2161, 5591, 2160, 5592, 2159, 5593, 2158, 5594,
  2157, 5595, 2156, 5596, 2155, 5597, 2154, 5598, 2153, 5599, 2152, 5600, 2151,
  5601, 2150, 5602, 2149, 5603, 2148, 5604, 2147, 5605, 2146, 5606, 2145, 5607,
  2144, 5608, 2143, 5609, 2142, 5610, 2141, 5611, 2140, 5612, 2139, 5613, 2138,
  5614, 2137, 5615, 2136, 5616, 2135, 5617, 2134, 5618, 2133, 5619, 2132, 5620,
  2131, 5621, 2130, 5622, 2129, 5623, 2128, 5624, 2127, 5625, 2126, 5626, 2125,
  5627, 2124, 5628, 2123, 5629, 2122, 5630, 2121, 5631, 2120, 5632, 2119, 5633,
  2118, 5634, 2117, 5635, 2116, 5636, 2115, 5637, 2114, 5638, 2113, 5639, 2112,
  5640, 2111, 5641, 2110, 5642, 2109, 5643, 2108, 5644, 2107, 5645, 2106, 5646,
  2105, 5647, 2104, 5648, 2103, 5649, 2102, 5650, 2101, 5651, 2100, 5652, 2099,
  5653, 2098, 5654, 2097, 5655, 2096, 5656, 2095, 5657, 2094, 5658, 2093, 5659,
  2092, 5660, 2091, 5661, 2090, 5662, 2089, 5663, 2088, 5664, 2087, 5665, 2086,
  5666, 2085, 5667, 2084, 5668, 2083, 5669, 2082, 5670, 2081, 5671, 2080, 5672,
  2079, 5673, 2078, 5674, 2077, 5675, 2076, 5676, 2075, 5677, 2074, 5678, 2073,
  5679, 2072, 5680, 2071, 5681, 2070, 5682, 2069, 5683, 2068, 5684, 2067, 5685,
  2066, 5686, 2065, 5687, 2064, 5688, 2063, 5689, 2062, 5690, 2061, 5691, 2060,
  5692, 2059, 5693, 2058, 5694, 2057, 5695, 2056, 5696, 2055, 5697, 2054, 5698,
  2053, 5699, 2052, 5700, 2051, 5701, 2050, 5702, 2049, 5703, 2048, 5704, 2047,
  5705, 2046, 5706, 2045, 5707, 2044, 5708, 2043, 5709, 2042, 5710, 2041, 5711,
  2040, 5712, 2039, 5713, 2038, 5714, 2037, 5715, 2036, 5716, 2035, 5717, 2034,
  5718, 2033, 5719, 2032, 5720, 2031, 5721, 2030, 5722, 2029, 5723, 2028, 5724,
  2027, 5725, 2026, 5726, 2025, 5727, 2024, 5728, 2023, 5729, 2022, 5730, 2021,
  5731, 2020, 5732, 2019, 5733, 2018, 5734, 2017, 5735, 2016, 5736, 2015, 5737,
  2014, 5738, 2013, 5739, 2012, 5740, 2011, 5741, 2010, 5742, 2009, 5743, 2008,
  5744, 2007, 5745, 2006, 5746, 2005, 5747, 2004, 5748, 2003, 5749, 2002, 5750,
  2001, 5751, 2000, 5752, 1999, 5753, 1998, 5754, 1997, 5755, 1996, 5756, 1995,
  5757, 1994, 5758, 1993, 5759, 1992, 5760, 1991, 5761, 1990, 5762, 1989, 5763,
  1988, 5764, 1987, 5765, 1986, 5766, 1985, 5767, 1984, 5768, 1983, 5769, 1982,
  5770, 1981, 5771, 1980, 5772, 1979, 5773, 1978, 5774, 1977, 5775, 1976, 5776,
  1975, 5777, 1974, 5778, 1973, 5779, 1972, 5780, 1971, 5781, 1970, 5782, 1969,
  5783, 1968, 5784, 1967, 5785, 1966, 5786, 1965, 5787, 1964, 5788, 1963, 5789,
  1962, 5790, 1961, 5791, 1960, 5792, 1959, 5793, 1958, 5794, 1957, 5795, 1956,
  5796, 1955, 5797, 1954, 5798, 1953, 5799, 1952, 5800, 1951, 5801, 1950, 5802,
  1949, 5803, 1948, 5804, 1947, 5805, 1946, 5806, 1945, 5807, 1944, 5808, 1943,
  5809, 1942, 5810, 9679, 13549, 9678, 13550, 9677, 13551, 9676, 13552, 9675,
  13553, 9674, 13554, 9673, 13555, 9672, 13556, 9671, 13557, 9670, 13558, 9669,
  13559, 9668, 13560, 9667, 13561, 9666, 13562, 9665, 13563, 9664, 13564, 9663,
  13565, 9662, 13566, 9661, 13567, 9660, 13568, 9659, 13569, 9658, 13570, 9657,
  13571, 9656, 13572, 9655, 13573, 9654, 13574, 9653, 13575, 9652, 13576, 9651,
  13577, 9650, 13578, 9649, 13579, 9648, 13580, 9647, 13581, 9646, 13582, 9645,
  13583, 9644, 13584, 9643, 13585, 9642, 13586, 9641, 13587, 9640, 13588, 9639,
  13589, 9638, 13590, 9637, 13591, 9636, 13592, 9635, 13593, 9634, 13594, 9633,
  13595, 9632, 13596, 9631, 13597, 9630, 13598, 9629, 13599, 9628, 13600, 9627,
  13601, 9626, 13602, 9625, 13603, 9624, 13604, 9623, 13605, 9622, 13606, 9621,
  13607, 9620, 13608, 9619, 13609, 9618, 13610, 9617, 13611, 9616, 13612, 9615,
  13613, 9614, 13614, 9613, 13615, 9612, 13616, 9611, 13617, 9610, 13618, 9609,
  13619, 9608, 13620, 9607, 13621, 9606, 13622, 9605, 13623, 9604, 13624, 9603,
  13625, 9602, 13626, 9601, 13627, 9600, 13628, 9599, 13629, 9598, 13630, 9597,
  13631, 9596, 13632, 9595, 13633, 9594, 13634, 9593, 13635, 9592, 13636, 9591,
  13637, 9590, 13638, 9589, 13639, 9588, 13640, 9587, 13641, 9586, 13642, 9585,
  13643, 9584, 13644, 9583, 13645, 9582, 13646, 9581, 13647, 9580, 13648, 9579,
  13649, 9578, 13650, 9577, 13651, 9576, 13652, 9575, 13653, 9574, 13654, 9573,
  13655, 9572, 13656, 9571, 13657, 9570, 13658, 9569, 13659, 9568, 13660, 9567,
  13661, 9566, 13662, 9565, 13663, 9564, 13664, 9563, 13665, 9562, 13666, 9561,
  13667, 9560, 13668, 9559, 13669, 9558, 13670, 9557, 13671, 9556, 5440, 1323,
  5441, 1322, 5442, 1321, 5443, 1320, 5444, 1319, 5445, 1318, 5446, 1317, 5447,
  1316, 5448, 1315, 5449, 1314, 5450, 9587, 13725, 17864, 13724, 17865, 13723,
  17866, 13722, 17867, 13721, 17868, 13720, 17869, 13719, 17870, 13718, 17871,
  13717, 17872, 13716, 17873, 13715, 17874, 13714, 9553, 13715, 9552, 13716,
  9551, 13717, 9550, 13718, 9549, 13719, 9548, 13720, 9547, 13721, 9546, 13722,
  9545, 13723, 9544, 13724, 9543, 13725, 9542, 5358, 9543, 5357, 9544, 5356,
  9545, 5355, 9546, 5354, 9547, 5353, 9548, 5352, 9549, 5351, 9550, 5350, 9551,
  5349, 9552, 5348, 9553, 5347, 9554, 5346, 9555, 5345, 9556, 5344, 9557, 5343,
  9558, 5342, 9559, 5341, 9560, 5340, 9561, 5339, 9562, 5338, 9563, 5337, 9564,
  5336, 9565, 5335, 9566, 5334, 9567, 5333, 9568, 5332, 9569, 5331, 9570, 5330,
  1089, 5331, 1088, 5332, 1087, 5333, 1086, 5334, 1085, 5335, 1084, 5336, 1083,
  5337, 1082, 5338, 1081, 5339, 1080, 5340, 1079, 5341, 1078, 5342, 1077, 5343,
  1076, 5344, 1075, 5345, 1074, 5346, 1073, 5347, 1072, 5348, 1071, 5349, 1070,
  5350, 1069, 5351, 1068, 5352, 1067, 5353, 1066, 5354, 1065, 5355, 1064, 5356,
  1063, 5357, 1062, 5358, 1061, 5359, 1060, 5360, 1059, 5361, 1058, 5362, 1057,
  5363, 1056, 5364, 1055, 5365, 1054, 5366, 1053, 5367, 1052, 5368, 1051, 5369,
  1050, 5370, 1049, 5371, 1048, 5372, 1047, 5373, 1046, 5374, 1045, 5375, 1044,
  5376, 1043, 5377, 1042, 5378, 1041, 5379, 1040, 5380, 1039, 5381, 1038, 5382,
  1037, 5383, 1036, 5384, 1035, 5385, 1034, 5386, 1033, 5387, 1032, 5388, 1031,
  5389, 1030, 5390, 1029, 5391, 1028, 5392, 1027, 5393, 1026, 5394, 1025, 5395,
  1024, 5396, 1023, 5397, 1022, 5398, 1021, 5399, 1020, 5400, 1019, 5401, 1018,
  5402, 1017, 5403, 1016, 5404, 1015, 5405, 1014, 5406, 1013, 5407, 1012, 5408,
  1011, 5409, 1010, 5410, 1009, 5411, 1008, 5412, 1007, 5413, 1006, 5414, 1005,
  5415, 1004, 5416, 1003, 5417, 1002, 5418, 1001, 5419, 1000, 5420, 999, 5421,
  998, 5422, 997, 5423, 996, 5424, 995, 5425, 994, 5426, 993, 5427, 992, 5428,
  991, 5429, 990, 5430, 989, 5431, 988, 5432, 987, 5433, 986, 5434, 985, 5435,
  984, 5436, 983, 5437, 982, 5438, 981, 5439, 980, 5440, 979, 5441, 978, 5442,
  977, 5443, 976, 5444, 975, 5445, 974, 5446, 973, 5447, 972, 5448, 971, 5449,
  970, 5450, 969, 5451, 968, 5452, 967, 5453, 966, 5454, 965, 5455, 964, 5456,
  963, 5457, 9952, 14448, 9951, 14449, 9950, 14450, 9949, 14451, 9948, 14452,
  9947, 14453, 9946, 14454, 9945, 14455, 9944, 14456, 9943, 14457, 9942, 14458,
  9941, 14459, 9940, 14460, 9939, 14461, 9938, 14462, 9937, 14463, 9936, 14464,
  9935, 14465, 9934, 14466, 9933, 14467, 9932, 14468, 9931, 14469, 9930, 14470,
  9929, 14471, 9928, 14472, 9927, 14473, 9926, 14474, 9925, 14475, 9924, 14476,
  9923, 14477, 9922, 14478, 9921, 14479, 9920, 14480, 9919, 14481, 9918, 14482,
  9917, 14483, 9916, 14484, 9915, 14485, 9914, 14486, 9913, 14487, 9912, 14488,
  9911, 14489, 9910, 14490, 9909, 5327, 9910, 5326, 9911, 5325, 9912, 5324,
  9913, 5323, 9914, 5322, 9915, 5321, 9916, 5320, 9917, 14515, 19114, 14514,
  19115, 14513, 19116, 14512, 9907, 14513, 9906, 14514, 9905, 14515, 9904,
  14516, 9903, 5289, 9904, 5288, 9905, 5287, 9906, 5286, 9907, 5285, 9908, 5284,
  9909, 5283, 9910, 5282, 9911, 5281, 9912, 5280, 9913, 5279, 9914, 5278, 641,
  5279, 640, 5280, 639, 5281, 638, 5282, 637, 5283, 9930, 14578, 19227, 14577,
  19228, 14576, 19229, 14575, 19230, 14574, 19231, 14573, 19232, 14572, 19233,
  14571, 19234, 14570, 19235, 14569, 9902, 5234, 9903, 5233, 9904, 5232, 9905,
  5231, 9906, 5230, 9907, 5229, 9908, 5228, 9909, 5227, 9910, 5226, 9911, 5225,
  9912, 5224, 9913, 5223, 9914, 5222, 9915, 5221, 9916, 5220, 9917, 5219, 9918,
  5218, 9919, 5217, 9920, 5216, 9921, 5215, 9922, 5214, 9923, 5213, 9924, 5212,
  9925, 5211, 9926, 5210, 9927, 5209, 9928, 5208, 9929, 5207, 9930, 5206, 9931,
  5205, 9932, 5204, 9933, 5203, 9934, 5202, 9935, 5201, 9936, 5200, 9937, 5199,
  9938, 5198, 9939, 5197, 9940, 5196, 9941, 5195, 448, 5196, 447, 5197, 446,
  5198, 445, 5199, 444, 5200, 443, 5201, 442, 5202, 441, 5203, 440, 5204, 439,
  5205, 438, 5206, 437, 5207, 436, 5208, 435, 5209, 434, 5210, 433, 5211, 432,
  5212, 431, 5213, 430, 5214, 429, 5215, 428, 5216, 427, 5217, 426, 5218, 10011,
  14805, 10010, 14806, 10009, 14807, 10008, 14808, 10007, 14809, 10006, 14810,
  10005, 14811, 10004, 14812, 10003, 5193, 10004, 5192, 10005, 5191, 376, 5192,
  375, 5193, 374, 5194, 373, 5195, 372, 5196, 371, 5197, 10024, 14852, 10023,
  14853, 10022, 5190, 10023, 5189, 10024, 5188, 10025, 5187, 10026, 5186, 10027,
  5185, 10028, 5184, 10029, 5183, 10030, 5182, 10031, 5181, 10032, 5180, 10033,
  5179, 10034, 5178, 10035, 5177, 10036, 5176, 10037, 5175, 10038, 5174, 10039,
  5173, 10040, 5172, 10041, 5171, 10042, 5170, 10043, 5169, 10044, 5168, 10045,
  5167, 10046, 5166, 10047, 5165, 10048, 5164, 10049, 5163, 10050, 5162, 10051,
  5161, 10052, 5160, 10053, 5159, 10054, 5158, 10055, 5157, 10056, 5156, 10057,
  5155, 10058, 5154, 10059, 5153, 10060, 5152, 10061, 5151, 10062, 5150, 10063,
  5149, 10064, 5148, 10065, 5147, 10066, 5146, 10067, 5145, 10068, 5144, 10069,
  5143, 10070, 5142, 10071, 5141, 10072, 5140, 10073, 5139, 10074, 5138, 10075,
  5137, 10076, 5136, 10077, 5135, 10078, 5134, 10079, 5133, 10080, 5132, 10081,
  5131, 10082, 5130, 10083, 5129, 10084, 5128, 10085, 5127, 10086, 5126, 10087,
  5125, 10088, 5124, 10089, 5123, 10090, 5122, 10091, 5121, 10092, 5120, 10093,
  5119, 10094, 5118, 10095, 5117, 10096, 5116, 10097, 5115, 10098, 5114, 10099,
  5113, 10100, 5112, 10101, 5111, 10102, 5110, 10103, 5109, 10104, 5108, 10105,
  5107, 10106,
].forEach((expected, n) => {
  test(`recaman(${n}) === ${expected}`, () => {
    assert.strictEqual(recaman(n), expected);
  });
});
