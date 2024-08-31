// components
import { CustomSelect, Options, TagRender } from '../components/select';
// styles
import { Container, Item } from '../style.tsx';
// icons
import SearchIcon from '../assets/search.svg';
import UserIcon from '../assets/user-profile.svg';
// types
import { IUserItem } from '../types.ts';

type SelectComponentProps = {
  users: IUserItem[];
}

function SelectComponent({ users }: SelectComponentProps) {

  const renderDefaultSelect = (
    <CustomSelect
      label="Team Member (Default)"
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.id,
        label: <Options option={{
          id: user.id,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  const renderDefaultSelectDisabled = (
    <CustomSelect
      label="Team Member (Disabled)"
      disabled
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.id,
        label: <Options option={{
          id: user.id,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  const renderDefaultSelectOptionsDisabled = (
    <CustomSelect
      label="Team Member (Option Disabled)"
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.id,
        disabled: user.id > 5,
        label: <Options option={{
          id: user.id,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  const renderDefaultSelectSortingAZ = (
    <CustomSelect
      label="Team Member (A-Z)"
      filterSort={(a, b) => {
        const titleA = a?.title || '';
        const titleB = b?.title || '';
        return titleA.localeCompare(titleB);
      }}
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.id,
        label: <Options option={{
          id: user.id,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );


  const renderDefaultSelectSortingZA = (
    <CustomSelect
      label="Team Member (Z-A)"
      filterSort={(a, b) => {
        const titleA = a?.title || '';
        const titleB = b?.title || '';
        return titleB.localeCompare(titleA);
      }}
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.id,
        label: <Options option={{
          id: user.id,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  const renderSelectWithDot = (
    <CustomSelect
      type="dotted"
      label="Team Member (With Dot)"
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.username,
        label: <Options option={{
          id: user.id,
          title: user.name,
          label: user.username,
          dot: true,
        }} />,
      }))}
    />
  );

  const renderSelectWithImage = (
    <CustomSelect
      label="Team Member (With Image)"
      prefixIcon={<UserIcon />}
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: `https://i.pravatar.cc/150?u=${user.id}`,
        label: <Options option={{
          id: user.id,
          value: `https://i.pravatar.cc/150?u=${user.id}`,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  const renderSelectWithDefaultImage = (
    <CustomSelect
      label="Team Member (With Profile Icon)"
      prefixIcon={<UserIcon />}
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.username,
        label: <Options option={{
          id: user.id,
          value: 'default',
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  const renderDefaultSelectSearch = (
    <CustomSelect
      showSearch
      type="search"
      label="Search(Default)"
      prefixIcon={<SearchIcon />}
      filterOption={(input: string, option) =>
        (option?.title ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.id,
        label: <Options option={{
          id: user.id,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  const renderSelectWithImageSearch = (
    <CustomSelect
      showSearch
      type="tags"
      mode="multiple"
      label="Search (With Image & Tags)"
      prefixIcon={<SearchIcon />}
      filterOption={(input: string, option) =>
        (option?.title ?? '').toLowerCase().includes(input.toLowerCase())
      }
      tagRender={TagRender}
      options={users?.map((user: IUserItem) => ({
        title: user.name,
        value: user.name,
        label: <Options option={{
          id: user.id,
          value: `https://i.pravatar.cc/150?u=${user.id}`,
          title: user.name,
          label: user.username,
        }} />,
      }))}
    />
  );

  return (
    <Container>
      <Item>
        {renderDefaultSelect}
      </Item>
      <Item>
        {renderDefaultSelectDisabled}
      </Item>
      <Item>
        {renderDefaultSelectOptionsDisabled}
      </Item>
      <Item>
        {renderDefaultSelectSortingAZ}
      </Item>
      <Item>
        {renderDefaultSelectSortingZA}
      </Item>
      <Item>
        {renderSelectWithImage}
      </Item>
      <Item>
        {renderSelectWithDot}
      </Item>
      <Item>
        {renderSelectWithDefaultImage}
      </Item>
      <Item>
        {renderDefaultSelectSearch}
      </Item>
      <Item>
        {renderSelectWithImageSearch}
      </Item>
    </Container>
  );
}

export default SelectComponent;
