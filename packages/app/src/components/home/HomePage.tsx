import {
  HomePageToolkit,
  HomePageCompanyLogo,
  HomePageStarredEntities,
  TemplateBackstageLogo,
  TemplateBackstageLogoIcon,
} from '@backstage/plugin-home';
import { Content, Page } from '@backstage/core-components';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { Warning } from '@material-ui/icons';

// Styles
const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
}));

const useBannerStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

// Banner
const WarningBanner: React.FC = () => {
  const classes = useBannerStyles();
  return (
    <div className={classes.container}>
      <Warning className={classes.icon} />
      This is a test environment of Backstage.
    </div>
  );
};

export const HomePage = () => {
  const classes = useStyles();
  const { svg, path, container } = useLogoStyles();

  // Direct links to useful locations, which you can change to whatever you want
  const tools = [
    {
      url: '/create/actions',
      label: 'Create/Actions',
      icon: <TemplateBackstageLogoIcon />,
    },
    {
      url: '/docs',
      label: 'Docs',
      icon: <TemplateBackstageLogoIcon />,
    },
    {
      url: '/catalog?filters%5Bkind%5D=user',
      label: 'User Catalog',
      icon: <TemplateBackstageLogoIcon />,
    },
    {
      url: '/catalog?filters%5Bkind%5D=group',
      label: 'Group Catalog',
      icon: <TemplateBackstageLogoIcon />,
    },
  ];

  // Use the search bar and starred entities as is
  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo
              className={container}
              logo={<TemplateBackstageLogo classes={{ svg, path }} />}
            />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar
                InputProps={{
                  classes: { root: classes.searchBarInput, notchedOutline: classes.searchBarOutline },
                }}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit tools={tools} />
              </Grid>
              <Grid item xs={12}>
                <WarningBanner />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};