import os
import time

from Data.parameters import Data
from get_dir import pwd
from reuse_func import GetData


class cluster_button():
    def __init__(self,driver):
        self.driver =driver

    def test_clusterbtn(self):
        self.p = GetData()
        cal = pwd()
        self.driver.find_element_by_xpath(Data.hyper_link).click()
        self.p.page_loading(self.driver)
        self.driver.find_element_by_id(Data.scm_cluster).click()
        self.p.page_loading(self.driver)
        time.sleep(20)
        dots = self.driver.find_elements_by_class_name(Data.dots)
        count = len(dots)-1
        self.driver.find_element_by_id('download').click()
        time.sleep(8)
        self.filename = cal.get_download_dir() + '/Cluster_wise_report.csv'
        self.p.page_loading(self.driver)
        file = os.path.isfile(self.filename)
        self.p.page_loading(self.driver)
        os.remove(self.filename)
        self.p.page_loading(self.driver)
        return count, file