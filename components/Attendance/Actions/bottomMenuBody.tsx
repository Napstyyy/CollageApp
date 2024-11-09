import React, { useState } from 'react';
import { View } from 'react-native';
import LookupField from '@/components/Fields/lookup';
import MultipleSelectList from '@/components/Lists/MultipleSelectList';
import teacherDictionary from '@/data/teachers';
import { groups } from '@/data/groups';
import BlankComponent from '@/components/BlankComponent';
import MainButton from '@/components/MainButton';
import CustomModal from '@/components/Modals/customModal';
import MainTable from '@/components/Tables/mainTable';

const BottomMenuBody: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <LookupField data={teacherDictionary} option="profesor" />
      <BlankComponent BCwidth={undefined} BCheight={18} />
      <MultipleSelectList options={groups} />
      <BlankComponent BCwidth={undefined} BCheight={16} />
      <MainButton text="Aceptar" onPress={() => setModalVisible(true)} />
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <MainTable />
      </CustomModal>
    </>
  );
};

export default BottomMenuBody;