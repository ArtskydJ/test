# Find the day of the week
# 
# Joseph Dykstra
# 2018-01-16
#
# Adapted from
# https://www.youtube.com/watch?v=714LTMNJy5M

import sys

def day_of_the_week(date):
	date_parts = date.split('-')

	year = int(date_parts[0]) # 1776
	month = int(date_parts[1]) # 07
	day = int(date_parts[2]) # 04
	is_leap_year = (year % 4 == 0) and ((year % 100 != 0) or (year % 400 == 0))

	year_remainder = year % 100 # 76

	index = [ 2, 0, 5, 3 ][(year // 100) % 4]
	middle = year_remainder // 12
	ring = year_remainder % 12
	pinkie = ring // 4

	month_doomsday = [ None, 3, 28, 14, 4, 9, 6, 11, 8, 5, 10, 7, 12 ][ month ]


	if month <= 2 and is_leap_year:
		month_doomsday += 1

	thumb = (70 + day - month_doomsday) % 7
	pretty_day_doomsday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	][ (thumb + index + middle + ring + pinkie) % 7 ]

	# print(thumb, index, middle, ring, pinkie)

	return date + ' was a ' + pretty_day_doomsday

print(day_of_the_week(sys.argv[1]))
# print(day_of_the_week('1776-07-04')) # Thursday
# print(day_of_the_week('1969-07-20')) # Sunday
# print(day_of_the_week('1984-01-06')) # Friday
# print(day_of_the_week('2063-04-05')) # Saturday
# print(day_of_the_week('2154-08-18')) # Sunday
