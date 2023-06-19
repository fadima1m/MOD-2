import unittest
import main
from datetime import *
now = datetime.now()
current_time = now.strftime("%H:%M:%S")
current_date = now.strftime("%b %d, %y")

print("Programmer: Fadima Macalou")
print(f'Lab 13.1 {current_date} {current_time}\n')


class TestMain(unittest.TestCase):
    def test_fun(self):
        self.assertEqual(main.fun(4), 16)

    def test_fun2(self):
        self.assertEqual(main.fun(5), 25)

    def test_fun3(self):
        self.assertEqual(main.fun(6), 36)

    def test_fun4(self):
        self.assertEqual(main.fun(7), 49)


if __name__ == '__main__':
    unittest.main()
